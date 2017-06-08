import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

const baseLinkPattern: RegExp = /https:\/\/steamcommunity.com\/tradeoffer\/new\/\?/;

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

  public showErrorMessage(text:string): string {
    return text;
  }

  private validatePartnerID(id:string): boolean {
    let regexp:RegExp = /^[0-9]+$/;
    let result:boolean = regexp.test(id);
    return result;
  }

  private validateUserToken(token:string):boolean{
    let regexp:RegExp = /^[a-zA-Z 0-9]*$/;
    let result:boolean = regexp.test(token);
    return result;
  }

  getInputValue(val) {
    let link: string = val;
    let compareBase: boolean = baseLinkPattern.test(link);
    let userData: string[] = link.replace('https://steamcommunity.com/tradeoffer/new/?', '').split("&")
    if (compareBase) {
      let userObj: Link = {
        partner: userData[0].replace('partner=', ''),
        token: userData[1].replace('token=', '')
      }
      if (this.validatePartnerID(userObj.partner)) {

      } else {
        this.showErrorMessage('Invalid Partner ID')
      }
    } else {
      this.showErrorMessage('Your link is not from SteamCommunity')
    }

  }


}
