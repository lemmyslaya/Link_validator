import { Component, OnInit } from '@angular/core';

const baseLinkPattern:RegExp = /https:\/\/steamcommunity.com\/tradeoffer\/new\/\?/;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})


export class ControlsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }

  showErrorMessage(text):String{
    console.log(text);
    return text;
  }

  validatePartnerID(id):boolean{
    var regexp = /^[0-9]{7}$/;
    var result = regexp.test(id);
    return result;
  }

  getInputValue(val) {
    let link: string = val;
    let compareBase: boolean = baseLinkPattern.test(link);
    let userData:string[] = link.replace('https://steamcommunity.com/tradeoffer/new/?', '').split("&")
    var userObj:Object = {
      partner: userData[0].replace('partner=',''),
      token: userData[1].replace('token=','')
    }
    if(compareBase){

    }else{
      this.showErrorMessage('Your link is not from SteamCommunity')
    }
    
  }


}
