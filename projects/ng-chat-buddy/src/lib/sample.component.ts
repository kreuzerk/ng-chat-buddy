import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgChatBuddySampleService } from './sample.service';

@Component({
  selector: 'ng-chat-buddy-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgChatBuddySampleComponent {
  constructor(public sampleService: NgChatBuddySampleService) {}
}
