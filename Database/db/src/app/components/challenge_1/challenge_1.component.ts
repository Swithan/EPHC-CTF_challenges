import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './challenge_1.component.html',
  styleUrls: ['./challenge_1.component.css']
})

export class Challenge1Component implements OnInit {

  public form;
  x = '<ãB\x10±\x13';

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      result : ''
    });
  }

  ngOnInit(): void {
    if (history.state.step != 0) {
      this.router.navigateByUrl('/home', { state: {step: 0, error: 'Please validate all previous steps'}})
    }
  }

  onSubmit(res: any) {
    let error = document.getElementById('error');
    let answer = res.result.toUpperCase();
    let hide = window.atob(answer);
    if (hide == this.x) {
      if (error != null) {
        error.innerHTML = ''
      }
      this.router.navigateByUrl('/home', { state: {step: 2}});
    } else {
      if (error != null) {
        error.innerHTML = 'Try again'
      }
    }
  }
}