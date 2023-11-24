import type { Destination } from 'src/types/Types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  destination: Destination = {
    id: 0,
    name: "",
    images: {
      png: "",
      webp: ""
    },
    description: "",
    distance: "",
    travel: ""
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.route.params.subscribe(() => this.dataService.getDestination(Number(this.route.snapshot.params[ 'id' ]))
      .subscribe(destination => this.destination = destination));
  }
}
