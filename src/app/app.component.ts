import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // template: `
  //   <router-outlet></router-outlet>
  // `
})
export class AppComponent implements OnInit {
  private translate: TranslateService

  constructor(translate: TranslateService) {
    this.translate = translate
  }

  ngOnInit(): void {
    const language: string = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.setDefaultLang(language)
  }

}
