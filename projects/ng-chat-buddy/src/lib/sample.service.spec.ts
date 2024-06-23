import { NgChatBuddySampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgChatBuddySampleService;

  beforeEach(() => {
    sut = new NgChatBuddySampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
