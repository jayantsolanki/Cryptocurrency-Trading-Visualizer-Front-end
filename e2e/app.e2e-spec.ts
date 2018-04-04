import { OrderBookPage } from './app.po';

describe('order-book App', function() {
  let page: OrderBookPage;

  beforeEach(() => {
    page = new OrderBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
