import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { profileData } from '../profile';


@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {
  accountForm: any;
  submitted = false
  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      account: ['', Validators.required]
    })
  }

  get accountFormControl(){
    return this.accountForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.accountForm.valid){
      console.log(this.accountForm.value)
      this.getProfile(this.accountForm.value)
    }
  }

  getProfile(account:any){
    return this.appService.getProfile(account).subscribe((data:any) =>{
      console.log(data)
    })
  }

}
