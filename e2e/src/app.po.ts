import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getInputNumber() {
    return element(by.css('app-root app-input-number input')).getAttribute('type') as Promise<string>;
  }

  getInputText() {
    return element(by.css('app-root app-input-text input')).getAttribute('type') as Promise<string>;
  }

  getTextInput() {
    return element(by.css('input[type=text]')).getAttribute('value') as Promise<string>;
  }

  getInputRange() {
    return element(by.css('app-root app-input-range input')).getAttribute('type') as Promise<string>;
  }

  getRangeValue(){
    return element(by.css('input[type=range]')).getAttribute('value') as Promise<string>;
  }
  
  getOutputRangeValue(){
    return element(by.css('.input-value')).getText() as Promise<string>;
  }

  getInputDate() {
    return element(by.css('app-root app-input-date input')).getAttribute('type') as Promise<string>;
  }
}
