import type { Crew } from '../../types/Types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './crews.component.html',
  styleUrl: './crews.component.css'
})
export class CrewsComponent {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  crews: Crew[] | undefined;
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

  getCrews(): void {
    this.dataService.getCrews()
      .subscribe(crews => this.crews = crews);
  }

  getCrew(): void {
    const crewId = Number(this.route.snapshot.params[ 'id' ]);
    this.dataService.getCrew(crewId)
      .subscribe(crew => this.crew = crew);
  }

  ngOnInit(): void {
    this.getCrews();
  }
}
