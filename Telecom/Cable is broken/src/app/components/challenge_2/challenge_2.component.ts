import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './challenge_2.component.html',
  styleUrls: ['./challenge_2.component.css']
})

export class Challenge2Component implements OnInit {

  public form;
  x = 'MTYuNjc=';

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      result : ''
    });
  }

  ngOnInit(): void {
    if (history.state.step != 2) {
      this.router.navigateByUrl('/home', { state: {step: 0, error: 'Please validate all previous steps'}})
    }
  }

  onSubmit(res: any) {
    let error = document.getElementById('error');
    let hide = window.btoa(res.result);
    if (hide == this.x) {
      if (error != null) {
        error.innerHTML = ''
      }
      this.router.navigateByUrl('/home', { state: {step: 3}});
    } else {
      if (error != null) {
        error.innerHTML = 'Try again'
      }
    }
  }
}