import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http'
// Third party libraries
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Root routing module
import { AppRoutingModule } from './app-routing.module';
// Root components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/pageNotFound/pageNotFound.component'
// Store
import { reducers, effects } from './shared/store';
// Sub Modules
import { MainModule } from './main/main.module'
import { TestModule } from './test/test.module';
// Environment
import { environment } from '../environments/environment'


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useClass: AppTranslationService,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers),
    // StoreModule.forFeature('appState', reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // 가장 최근에 변화한 state 변경을 25개까지 보여준다
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    /**
     * EffectsModule.forRoot([]) sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.forRoot(effects),
    /**
     * Sub Modules
     */
    MainModule,
    TestModule,
    /**
     * App Routing Module
     */
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
