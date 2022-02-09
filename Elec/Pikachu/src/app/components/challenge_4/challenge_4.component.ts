import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './challenge_4.component.html',
  styleUrls: ['./challenge_4.component.css']
})

export class Challenge4Component implements OnInit {

  public form;
  x = 'MTEuMzY=';

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      result : ''
    });
  }

  ngOnInit(): void {
    if (history.state.step != 4) {
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
      this.router.navigateByUrl('/home', { state: {step: 5}});
    } else {
      if (error != null) {
        error.innerHTML = 'Try again'
      }
    }
  }
}