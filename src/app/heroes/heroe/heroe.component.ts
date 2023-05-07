import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public Name : string = 'Ironman';
  public Age : number  = 45;

  public get capitalizedName(): string{
    return this.Name.toUpperCase();
  }

  public getHeroDescription(): string{
    return `${this.Name} - ${this.Age}`;
  }

  public changeHero(): void {
    this.Name = 'Spiderman';
  }

  public changeAge(): void {
    this.Age = 10;
  }

  public reset() : void {
    this.Name = 'Iroman';
    this.Age = 45;
  }
}
