import { LocaleventsappPage } from './app.po';

describe('localeventsapp App', function() {
  let page: LocaleventsappPage;

  beforeEach(() => {
    page = new LocaleventsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
