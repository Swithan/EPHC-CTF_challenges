import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  step = 0;
  error = '';

  constructor(public router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.step = history.state.step== undefined? 0: history.state.step;
    if (history.state.error != null) {
      this.error = history.state.error;
    } else {
      this.error = '';
      if (this.step == undefined) {this.step = 0}
      if (this.step>0) {this.next(this.step)}
    }
  }
  
  status = 1;
  title = 'Data best';

  next(a: any) {
    this.router.navigateByUrl(`/challenge_${a}`, {state: {step: this.step}});
  }
}
