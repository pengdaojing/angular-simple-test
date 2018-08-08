import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output() titleClicked = new EventEmitter();
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  clicked() {
    this.titleClicked.emit({name: 'test'});
    this.commonService.titleClicked.emit({type: 'service emit'});
  }

}
