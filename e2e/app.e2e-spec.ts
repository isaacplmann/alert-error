import { AlertyPage } from './app.po';

describe('alerty App', () => {
  let page: AlertyPage;

  beforeEach(() => {
    page = new AlertyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
