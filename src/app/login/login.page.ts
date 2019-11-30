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
  Member = [{ username: '60160353', password: '60160353' ,name: 'เสถียร'},
            { username: '60160157', password: '60160157' ,name: 'จิรเมธ'},
            { username: '60160104', password: '60160104' ,name: 'เกศรินทร์'},
            { username: '60160086', password: '60160086' ,name: 'ธนัญญา'},
            { username: '60160089', password: '60160089' ,name: 'เนตรชนก'},
            { username: '60160093', password: '60160093' ,name: 'พีรณัฐ'},
            { username: '60160154', password: '60160154' ,name: 'คณาธิป'},
            { username: '60160165', password: '60160165' ,name: 'ธัญพิสิษฐ์'},
            { username: '60160337', password: '60160337' ,name: 'ณัฐธร'},
            { username: '60160351', password: '60160351' ,name: 'วิภาวี'}]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Login(){

    let found = false;

    for(let data of this.Member){
      if(data.username === this.username && data.password === this.password){
        found = true;
        this.router.navigateByUrl('home');
        break;
      }                   
    }
    if(found === false){
      alert("Username or Password incorrect");
    }
  }

}
