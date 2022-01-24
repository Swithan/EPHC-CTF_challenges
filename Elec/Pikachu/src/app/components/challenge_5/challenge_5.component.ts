import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './challenge_5.component.html',
  styleUrls: ['./challenge_5.component.css']
})

export class Challenge5Component implements OnInit {

  title = '';
  x = 'V2VsbCBkb25lISBFUEhDe01yLjdIM3cwMUZ9';

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (history.state.step != 5) {
      this.router.navigateByUrl('/home', { state: {step: 0, error: 'Please validate all previous steps'}})
    } else {
      this.title = window.atob(this.x);
    }
  }
}