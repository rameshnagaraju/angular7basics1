import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('ipmsg')msg: string="default";
  dmsg: string;

  constructor() {
    console.log("msg is "+ this.msg);
  }

  ngOnInit() {
    this.dmsg = this.msg;
  }

}
