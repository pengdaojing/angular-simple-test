import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../common/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title = 'login-header';
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.titleClicked.subscribe(e => {
      console.log('title', e);
    });
  }

  public toPageOne() {
    this.router.navigate(['/page-one']);
  }

  clicked(e) {
    console.log('title clicked', e);
  }

}
