import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message/message';
@NgModule({
	declarations: [MessageComponent],
	imports: [IonicModule],
	exports: [MessageComponent]
})
export class ComponentsModule {}
