import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonballService } from '../../core/services/dragonball.service';
import { DragonBallCharacter } from '../../models/dragonball';
import { trigger, transition, style, animate } from '@angular/animations';

// Material
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
  animations: [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('400ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ])
]
})
export class DragonballComponent implements OnInit {
  characters = signal<DragonBallCharacter[]>([]);

  constructor(private service: DragonballService) {}

  ngOnInit(): void {
    this.service.getCharacters().subscribe(data => {
      this.characters.set(data);
    });
  }
}
