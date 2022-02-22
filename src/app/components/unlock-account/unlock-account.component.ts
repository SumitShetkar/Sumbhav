
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {

  showmessge : boolean ;

  unlockAccountForm : FormGroup
  email =new FormControl('',[Validators.required,Validators.email])
  tempPassword =new FormControl('',Validators.required)
  newPassword =new FormControl('',Validators.required)
  confirmPassword = new FormControl('',[Validators.required])

  constructor(private fb : FormBuilder) { 
    this.unlockAccountForm = this.fb.group({
     email : this.email,
     tempPassword : this.tempPassword,
     newPassword: this.newPassword,
     confirmPassword: this.confirmPassword
    }) 
  }
  ngAfterViewInit(): void {
   
  }

  ngOnInit() {
  }

  onUnlockAccount(){

  }

  //  confirmPasswordCheck(control : AbstractControl)
  // {
  //   // let cnfrmPass = 'abc'
  //     //let newPass = 'abc'
  //     //  let newPass = control.parent.get('newPassword').value
  //   //  let cnfrmPass = control.value 
 
  //   let cnfrmPass = control.value
  //   console.log(cnfrmPass)
    
  //   // let newPass = control['newPassword'].value
  //   let newPass = (<FormGroup>control.parent).get('newPassword')
  //   console.log(newPass)
    
    

  //   if(newPass != null)
  //   {
  //     if(cnfrmPass === newPass)
  //     {
  //       return {confirmPasswordCheck:false}
  //     }else
  //     {
  //       return {confirmPasswordCheck:true}
  //     }

  //   }
  // }

  CheckPassword(pass:any,confirmPassword:any){
    if(pass.value === confirmPassword.value)
    {
      this.unlockAccountForm.setErrors(null);
      this.showmessge = false
    }
    else
    {
      this.unlockAccountForm.setErrors({ 'invalid': false });
      this.showmessge = true
     
    }
  }

}
