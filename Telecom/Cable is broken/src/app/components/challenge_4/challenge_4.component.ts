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
  x = 'MTEuMzYgbUE=';

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      A : '',
      B : '',
      C : '',
      D : '',
      E : '',
      F : '',
      G : '',
      H : ''
    });
  }

  ngOnInit(): void {
    if (history.state.step != 4) {
      this.router.navigateByUrl('/home', { state: {step: 0, error: 'Please validate all previous steps'}})
    }
  }

  onSubmit(res: any) {
    let error = document.getElementById('error');
    console.log(res)
    if (btoa(res.A) == "Mw==" && btoa(res.B) == "Ng==" && btoa(res.C) == "MQ==" && btoa(res.D) == 'Nw=='
      && btoa(res.E) == "OA==" && btoa(res.F) == "Mg==" && btoa(res.G) == "NA==" && btoa(res.H) == "NQ==") {
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