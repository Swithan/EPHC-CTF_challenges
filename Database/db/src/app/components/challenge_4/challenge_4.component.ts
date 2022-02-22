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
  com = ['SU5TRVJUIElOVE8gQ09NTUFOREUgVkFMVUVTICgnMzAxODknLCAnRjQwMCcsICcyMDIyLTAyJyk=','SU5TRVJUIElOVE8gQ09NTUFOREUgVkFMVUVTICgnMzAxODknLCAnRjQwMCcsICcyMDIyLTAyJyk7'];
  det = ['SU5TRVJUIElOVE8gREVUQUlMIFZBTFVFUyAoJzMwMTg5JywgJ1BTMjIyJywgNDAp','SU5TRVJUIElOVE8gREVUQUlMIFZBTFVFUyAoJzMwMTg5JywgJ1BTMjIyJywgNDApOw=='];

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      commande : '',
      detail : ''
    });
  }

  ngOnInit(): void {
    if (history.state.step != 4) {
      this.router.navigateByUrl('/home', { state: {step: 0, error: 'Please validate all previous steps'}})
    }
  }

  onSubmit(res: any) {
    let error = document.getElementById('error');
    if (this.com.indexOf(btoa(res.commande.toUpperCase()))> -1 && this.det.indexOf(btoa(res.detail.toUpperCase())) > -1) {
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