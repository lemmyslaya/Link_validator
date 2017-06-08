import { ESportPage } from './app.po';

describe('esport App', () => {
  let page: ESportPage;

  beforeEach(() => {
    page = new ESportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
