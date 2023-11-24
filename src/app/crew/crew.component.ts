import type { Crew } from '../../types/Types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.route.params.subscribe(() => this.dataService.getCrew(Number(this.route.snapshot.params[ 'id' ]))
      .subscribe(crew => this.crew = crew));
  }

  crew: Crew = {
    id: 0,
    name: "",
    images: {
      png: "",
      webp: ""
    },
    role: "",
    bio: ""
  };
}
