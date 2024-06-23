import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgChatBuddySampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
