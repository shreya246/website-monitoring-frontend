import { Component, OnInit } from '@angular/core';
import { CheckServiceService } from 'src/app/service/check-service.service';
import { Check } from 'src/app/model/Check';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 checkList:Check[]=[];
 display=false;
 displayAddModal=false;
  constructor(private checkService:CheckServiceService,private router:Router) {
   if(!this.checkService.tokenExpired()){
      this.getAllCheck();
   }else{
     this.router.navigate(['/']);
   }
  }
  checkData: Check | undefined;
  ngOnInit(): void {

  }
  callAdd(){
    console.log(this.displayAddModal);
   this.displayAddModal=true;
   console.log(this.displayAddModal);
  }
  getAllCheck(): void{
    timer(0, 60000).pipe(
      switchMap(() => { 
        this.display=false; 
        if(!this.checkService.tokenExpired())
        return this.checkService.getAllCheck();
        else 
        return this.router.navigate(['/']);
      })).subscribe((resultCheck:any)=>{
      this.checkList=resultCheck;
      this.display=true;
    });
    
    
    
  }
callGetApi(event: boolean): void{
  this.displayAddModal=false;
    this.display=false;
    this.getAllCheck();
}
}
