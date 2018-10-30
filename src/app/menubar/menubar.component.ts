import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input('ipmenuItems') menuItems: any;
  constructor() { }

  ngOnInit() {
    console.log("Input list of menu items is "+ JSON.stringify(this.menuItems));
  }

}
