import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiService } from '../../providers/rest-api-service/rest-api-service';
import { DataService } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private restApi: RestApiService, private data: DataService) {

  }

  ionViewWillEnter() {
    this.getData();
  }

  async getData() {
    let data = await this.restApi.get('https://lamun-pos-api.herokuapp.com');
    this.data.success(data);
  }

}
