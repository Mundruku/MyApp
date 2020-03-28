import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-mechanic-login',
  templateUrl: './mechanic-login.component.html',
  styleUrls: ['./mechanic-login.component.scss'],
})
export class MechanicLoginComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    
  });
  ngOnInit() {}

}
