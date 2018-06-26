import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { RestApiService } from '../../providers/rest-api-service/rest-api-service';
import { DataService } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataRes: any;
  constructor(public navCtrl: NavController, private restApi: RestApiService, private data: DataService) {

  }

  ionViewWillEnter() {
    this.getData();
  }

  async getData() {
    this.dataRes = await this.restApi.get('https://lamun-pos-api.herokuapp.com');
    this.data.success(this.dataRes.message);

  }

}
