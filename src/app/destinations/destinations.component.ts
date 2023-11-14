import type { Destination } from 'src/types/Types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  destinations: Destination[] | undefined;
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

  getDestinations(): void {
    this.dataService.getDestinations()
      .subscribe(destinations => this.destinations = destinations);
  }

  getDestination(): void {
    const destinationId = Number(this.route.snapshot.params[ 'id' ]);
    this.dataService.getDestination(destinationId)
      .subscribe(destination => this.destination = destination);
  }

  ngOnInit(): void {
    this.getDestinations();
  }
}
