import { NgCribsPage } from './app.po';

describe('ng-cribs App', () => {
  let page: NgCribsPage;

  beforeEach(() => {
    page = new NgCribsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
