import { Component, OnInit } from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
const url = 'https://bible-api.com/' ;
@Component({
  selector: 'app-dog',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css'],
  providers: [TerminalService]
})
export class BibleComponent implements OnInit {
  value: any = '';
  err;
  image;
  constructor(private terminalService: TerminalService, public http: HttpClient) {

//    this.http.jsonp(url + command,  'callback').
//   subscribe(res => {this.value = res;
//   },
// err => {this.err = err}
// );




}

  ngOnInit() {

  }

bible(message: any) {

  return this.http.jsonp(url + message,  'callback').subscribe(res=> {
this.value = res;
  }, err => console.log(err));

}
random() {
  return this.http.get('https://dog.ceo/api/breeds/image/random').subscribe((res: any) => {this.image = res.message;});
}
}
