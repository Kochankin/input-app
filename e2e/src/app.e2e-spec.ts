import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  // beforeEach(() => {
  //   page = new AppPage();
  // });
  page = new AppPage();
  page.navigateTo();

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Main');
  });

  it('should display input with type number', () => {
    expect(page.getInputNumber()).toEqual('number');
  });

  it('should display input with type text', () => {
    expect(page.getInputText()).toEqual('text');
  });

  it('should check text validation', () => {
    element(by.css('input[type=text]')).sendKeys('1234567891011');
    expect(page.getTextInput()).toEqual('1234567891');
  });

  it('should display input with type range', () => {
    expect(page.getInputRange()).toEqual('range');
  });

  it('should check range value output', () => {
    const output = page.getOutputRangeValue();
    expect(page.getRangeValue()).toEqual(output);
  });

  it('should display input with type date', () => {
    expect(page.getInputDate()).toEqual('date');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
