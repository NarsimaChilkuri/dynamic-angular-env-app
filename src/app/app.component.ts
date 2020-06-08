import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-env-angular-app';
  version = '1.0.0';
  stack = 'dev';

  constructor(private configService: AppConfigService) {

  }

  ngOnInit() {
    this.title = this.configService.getConfig().name;
    this.version = this.configService.getConfig().version;
    this.stack = environment.stack;
  }
}
