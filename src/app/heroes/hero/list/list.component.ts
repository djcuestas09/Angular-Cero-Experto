import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public HeroNames : string[] = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Robin'];
  public deletedHero ?: string;

  removeLastHero() : void {
    this.deletedHero = this.HeroNames.pop();
  }
}
