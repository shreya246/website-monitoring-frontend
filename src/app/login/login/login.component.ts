import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckServiceService } from 'src/app/service/check-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  success=false;
  login = new FormGroup({
    email: new FormControl(''),
   password: new FormControl(''),
  });
  constructor(private router:Router,private checkService:CheckServiceService) { }

  ngOnInit(): void {
  }
  submit():void{

    this.checkService.getTokenWithCredentials().subscribe((result=>{
      this.checkService.setToken(result);
      this.success=true;
      console.log(result);
      this.router.navigate(['/dashboard']);
    }),(error)=>{
      this.success=false;
    }
    )
    
  }

}
