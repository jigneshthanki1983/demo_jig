import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div><h1>{{appjig}}</h1></div>`,
})
export class AppComponent  { name = 'JIGNESH'; 
appjig: string ='Welcome';}
