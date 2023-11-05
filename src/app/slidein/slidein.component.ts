import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-slidein',
  templateUrl: './slidein.component.html',
  styleUrls: ['./slidein.component.css']
})
export class SlideinComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}

