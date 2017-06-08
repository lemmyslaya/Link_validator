import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';
import { ListService } from '../list.service';

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
  userObj: Link;
  
  constructor(private service: ListService) {
    this.warningVisible, this.correctVisible = false;
    this.warningInfo, this.correctInfo = '';
  }

  ngOnInit() {

  }

  public addNewItem(usr: Link): void {
    this.service.post(usr);
  }

  public showMessage(type: boolean, text: string): void {
    if (type) {
      this.correctVisible = true;
      this.correctInfo = text;
    } else {
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
    let regexp: RegExp = /^[-_|a-zA-Z0-9]*$/;
    let result: boolean = regexp.test(token);
    return result;
  }

  getInputValue(val) {
    let link: string = val;
    let compareBase: boolean = baseLinkPattern.test(link);
    let userData: string[] = link.replace('https://steamcommunity.com/tradeoffer/new/?', '').split("&")
    if (compareBase) {
      this.hideMessage();

      this.userObj = {
        partner: userData[0].replace('partner=', ''),
        token: userData[1].replace('token=', '')
      }

      if (this.validatePartnerID(this.userObj.partner)) {
        if(this.validateUserToken(this.userObj.token)){
          this.hideMessage();
          this.addNewItem(this.userObj);
          this.showMessage(true, 'Link is saved');
        }else{
          this.showMessage(false, 'Invalid Token');
        }
      } else {
        this.showMessage(false, 'Invalid Partner ID');
      }
    } else {
      this.showMessage(false, 'Your link is not from SteamCommunity');
    }

  }


}
