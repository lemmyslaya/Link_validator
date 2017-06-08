import { Component, OnInit } from '@angular/core';

const baseLinkPattern:RegExp = /https:\/\/steamcommunity.com\/tradeoffer\/new\/\?/;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})


export class ControlsComponent implements OnInit {
  
  warningInfo: string;
  warningVisible: boolean;

  constructor() { 
  	this.warningVisible = true;
  	this.warningInfo = 'test warning';
  }

  ngOnInit() {

  }

  showErrorMessage(text):String{
    console.log(text);
    return text;
  }

  getInputValue(val) {
    let link: string = val;
    let compareBase: boolean = baseLinkPattern.test(link);
    
    if(compareBase){

    }else{
      this.showErrorMessage('Your link is not from SteamCommunity')
    }
    
  }


}
