import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Check } from 'src/app/model/Check';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckServiceService } from 'src/app/service/check-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

 @Input()
 check: Check | null | undefined;

 @Output() callGetApi = new EventEmitter<boolean>();
 updateCheck = new FormGroup({
  url: new FormControl(''),
 name: new FormControl(''),
 frequency: new FormControl('')
});
formName: string="Add";
  constructor(private checkservice:CheckServiceService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.check);
        if(this.check!=null){
          this.formName="Update";
    this.updateCheck.patchValue({
      url: this.check?.url,
      name: this.check?.name,
      frequency: this.check?.frequency
    })
  }else{
    this.formName="Add";
  }
  }

  updateCheckValue(): void{
    if(this.checkservice.tokenExpired()){
      this.router.navigate(['/']);
    }else{
    if(this.check!=null){
     
    this.checkservice.updateCheckValue(this.updateCheck.value).subscribe((result)=>{
     alert("Updated");
  
     this.callGetApi.emit(true);
    })
  }
  else{
    
    this.checkservice.addNewCheck(this.updateCheck.value).subscribe((result)=>{
      alert("Added");
      this.callGetApi.emit(true);
    })
  }
}
}

 
}
