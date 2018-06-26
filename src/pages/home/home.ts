import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiService } from '../../providers/rest-api-service/rest-api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private restApi: RestApiService) {

  }

  ionViewWillEnter() {
    this.getData();
  }

  async getData() {
    let data = await this.restApi.get('https://lamun-pos-api.herokuapp.com');
    console.log(data);
  }

}
