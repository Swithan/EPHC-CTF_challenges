import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './challenge_3.component.html',
  styleUrls: ['./challenge_3.component.css']
})

export class Challenge3Component implements OnInit {

  public form;
  x = 'MzA4OTg=';

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      result : ''
    });
  }

  ngOnInit(): void {
    if (history.state.step != 3) {
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
      this.router.navigateByUrl('/home', { state: {step: 4}});
    } else {
      if (error != null) {
        error.innerHTML = 'Try again'
      }
    }
  }
}