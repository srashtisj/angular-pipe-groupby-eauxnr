import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  skill: {}[];

  ngOnInit() {
    setTimeout(() => {
      this.skill = [
        { id_skill: 8, descricao: 'html' },
        { id_skill: 9, descricao: 'json' },
        { id_skill: 12, descricao: 'js' },
        { id_skill: 28, descricao: 'html' },
        { id_skill: 229, descricao: 'json' },
        { id_skill: 212, descricao: 'js' }
      ];
    }, 1000);
  }

}
