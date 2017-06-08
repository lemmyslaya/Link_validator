import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';

const baseLinkPattern: RegExp = /https:\/\/steamcommunity.com\/tradeoffer\/new\/\?/;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})


export class ControlsComponent implements OnInit {
  correctVisible: boolean;
  correctInfo: string;
  warningInfo: string;
  warningVisible: boolean;
  @Input() newItems: Link[] = [];

  constructor() {
    this.warningVisible, this.correctVisible = false;
    this.warningInfo, this.correctInfo = '';
  }

  ngOnInit() {
    
  }

  public addNewItem(usr:Link):void{
    this.newItems.push(usr);
  }

  public showMessage(type: boolean, text: string): void {
    if(type){
      this.correctVisible = true;
      this.correctInfo = text;    
    }else{
      this.warningVisible = true;
      this.warningInfo = text;
    }
  }
  public hideMessage(): void {
    this.warningVisible = false;
    this.correctVisible = false;
  }

  private validatePartnerID(id: string): boolean {
    let regexp: RegExp = /^[0-9]+$/;
    let result: boolean = regexp.test(id);
    return result;
  }

  private validateUserToken(token: string): boolean {
    let regexp: RegExp = /^[a-zA-Z 0-9]*$/;
    let result: boolean = regexp.test(token);
    return result;
  }

  getInputValue(val) {
    let link: string = val;
    let compareBase: boolean = baseLinkPattern.test(link);
    let userData: string[] = link.replace('https://steamcommunity.com/tradeoffer/new/?', '').split("&")
    if (compareBase) {
      this.hideMessage();
      
      var userObj: Link = {
        partner: userData[0].replace('partner=', ''),
        token: userData[1].replace('token=', '')
      }

      if (this.validatePartnerID(userObj.partner)) {
        this.hideMessage();
        this.addNewItem(userObj);
        this.showMessage(true,'Link is saved');
      } else {
        this.showMessage(false,'Invalid Partner ID');
      }
    } else {
      this.showMessage(false,'Your link is not from SteamCommunity');
    }

  }


}
