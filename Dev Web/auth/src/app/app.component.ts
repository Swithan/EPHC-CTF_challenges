import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auth';
  test(): void {
    var dcPyjht = function(e0L8Yh7: string | any[], Z6ShH13: string | any[]) {
      if (e0L8Yh7.length !== Z6ShH13.length) return false;
      for (var i = 0; i < e0L8Yh7.length; i++) {
          if (e0L8Yh7[i] !== Z6ShH13[i]) return false;
      }
      return true;
  };
  var VUWQpfg = [132, 127, 153, 131, 138, 141, 146, 142, 131, 155];
  var BMw2sQw = [138, 133, 130, 138, 125, 142, 135, 138, 150];
  var q1GvYbP = [],
      lwr50fj = [];
  var WDzzeNT = VUWQpfg.length + BMw2sQw.length;
  var Jxohmlb = prompt('A password is required.');
  if (Jxohmlb == null){ Jxohmlb = "";}
  for (let i = 0; i < Jxohmlb.length; i++) {
      lwr50fj.push(Jxohmlb.charCodeAt(i) + 30);
  }
  for (let j = 0; j < WDzzeNT; j++) {
      if (VUWQpfg[j] != undefined) {
          q1GvYbP.push(VUWQpfg[j]);
      }
      if (BMw2sQw[j] != undefined) {
          q1GvYbP.push(BMw2sQw[j]);
      }
  }
  if (dcPyjht(lwr50fj, q1GvYbP)) {
      alert('Acces authorized ! Welcome. (You can use the password as flag)')
  } else {
      alert('Acces denied !')
  }
  }
  ngOnInit(): void {
      this.test()
  }
}
