import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Check } from 'src/app/model/Check';
import { CheckServiceService } from 'src/app/service/check-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  checkList: Check[] = [];
  @Input()
  addCheck!: boolean;
  
 displayUpdateModal=false;
 @Output() callGetAPI = new EventEmitter<boolean>();
 checkData!: Check | null;
  constructor(private checkService:CheckServiceService,private router:Router) {
   
   }

  ngOnInit(): void {
  }

callAdd(){

  this.checkData=null;
  this.displayUpdateModal=!this.displayUpdateModal;
  console.log(this.displayUpdateModal);
}
  
deleteCheck(name: string):void{
  if(this.checkService.tokenExpired()){
    this.router.navigate(['/']);
  }else{
  this.checkService.deleteCheck(name).subscribe((result=>{
  this.checkService.getAllCheck().subscribe(resultCheck=>{
    this.checkList=resultCheck;
  })
  }))
}
}
updateCheck(check:Check): void {
  
  this.checkData=check;
  this.displayUpdateModal=!this.displayUpdateModal;

}
callGetApi(event: boolean):void{
  this.displayUpdateModal=false;
  this.callGetAPI.emit(true);
}
}
