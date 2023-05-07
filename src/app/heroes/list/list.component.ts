import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  public heroeNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public DeleteHero?: string;

  removeLastHero(): void {
    this.DeleteHero = this.heroeNames.pop();
  }

}
