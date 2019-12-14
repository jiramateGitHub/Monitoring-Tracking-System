import { SessionService } from './../service/session/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username;
  password;
  Member = [{ username: '60160353', password: '60160353' ,fname: 'เสถียร'},
            { username: '60160157', password: '60160157' ,fname: 'จิรเมธ'},
            { username: '60160104', password: '60160104' ,fname: 'เกศรินทร์'},
            { username: '60160086', password: '60160086' ,fname: 'ธนัญญา'},
            { username: '60160089', password: '60160089' ,fname: 'เนตรชนก'},
            { username: '60160093', password: '60160093' ,fname: 'พีรณัฐ'},
            { username: '60160154', password: '60160154' ,fname: 'คณาธิป'},
            { username: '60160165', password: '60160165' ,fname: 'ธัญพิสิษฐ์'},
            { username: '60160337', password: '60160337' ,fname: 'ณัฐธร'},
            { username: '60160351', password: '60160351' ,fname: 'วิภาวี'}]

  constructor(private router: Router,private SessionService:SessionService) { }

  ngOnInit() {
  }

  Login(){

    let found = false;

    for(let data of this.Member){
      if(data.username === this.username && data.password === this.password){
        this.SessionService.UsPsCode = data.username;
        this.SessionService.fname = data.fname;
        found = true;
        break;
      }                   
    }
    if(found === false){
      alert("Username or Password incorrect");
    }else{
      this.router.navigateByUrl('home');
    }
  }

}
