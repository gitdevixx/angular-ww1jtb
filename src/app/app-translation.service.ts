import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateLoader } from '@ngx-translate/core';

@Injectable()
export class AppTranslationService implements TranslateLoader {

    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        return this.http.get(`http://ke-dd-api-lb-430622699.ap-northeast-2.elb.amazonaws.com:8080/api/callLocaleList?localeId=${lang}&seCode=demo`)
            .pipe(map((response: JSON) => {
                return response['localeData'];
            }));
    }
}