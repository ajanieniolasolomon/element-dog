import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibleComponent } from './bible/bible.component';
import {TerminalModule} from 'primeng/terminal';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BibleComponent
  ],
  imports: [
    BrowserModule,
    TerminalModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  entryComponents: [
BibleComponent
  ],

  providers: [],
 // bootstrap: [AppComponent]
})
export class AppModule {
constructor(private injector: Injector) {

}
ngDoBootstrap() {
  const el = createCustomElement(BibleComponent, {injector: this.injector});
  customElements.define('app-dog', el);

}
}
