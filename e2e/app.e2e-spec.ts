import { Ng2NotePage } from './app.po';

describe('ng2-note App', function() {
  let page: Ng2NotePage;

  beforeEach(() => {
    page = new Ng2NotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
