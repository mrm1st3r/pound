import { CallControllerService } from '../../src-gen';
import {Observable} from "rxjs";


export class CallControllerServiceMock extends CallControllerService {

  getCalls(disposition?: string, calldate?: Date, offset?: number, limit?: number, observe: any = 'body', reportProgress?: boolean): Observable<any> {
    return Observable.of([{
      src: "0123456789",
      dst: "0987654321",
      disposition: "ANSWERED"
    }])
  }
}
