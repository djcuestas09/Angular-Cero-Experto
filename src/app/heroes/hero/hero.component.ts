import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = "Goku";
  public age : number = 40;

  get capitalizedName () : string {
    return this.name.toUpperCase()
  }

  getHeroDescription() : string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void {
    this.name = "Batman"
  }

  changeAge() : void {
    this.age = 35
  }

  resetForm() : void {
    this.name = "Goku"
    this.age = 40
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</>'
    // });
  }

}


