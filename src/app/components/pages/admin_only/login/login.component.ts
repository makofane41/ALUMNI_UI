import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  isSubmitted = false;
  returnedUrl='';

  constructor(private formBulider:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

    ngOnInit(): void {
      this.loginForm = this.formBulider.group({
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      });
      this.returnedUrl = this.activatedRoute.snapshot.queryParams.returnedUrl;
    }

    get fc(){
      return this.loginForm.controls;
    }

    submit(){
       this.isSubmitted  = true;
       if(this.loginForm.invalid)
       return;

      // this.userService.login({
      //   email:this.fc.email.value,
      //   password:this.fc.password.value
      // }).subscribe(()=>{
      //   this.router.navigateByUrl(this.returnedUrl);
      // });
    }


}
