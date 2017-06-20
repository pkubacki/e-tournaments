import { ETournamentsPage } from './app.po';

describe('e-tournaments App', () => {
  let page: ETournamentsPage;

  beforeEach(() => {
    page = new ETournamentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
