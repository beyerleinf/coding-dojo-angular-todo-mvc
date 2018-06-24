import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../../modules';

import {InputComponent} from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
    });

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create event', () => {
    expect(component.submit).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should emit submit event with correct data', () => {
      const spy = spyOn(component.submit, 'emit');
      const text = 'SomeText';

      component.text = text;
      component.onSubmit();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(text);
    });

    it('should emit submit event when text is empty', () => {
      const spy = spyOn(component.submit, 'emit');
      const text = '';

      component.text = text;
      component.onSubmit();

      expect(spy).not.toHaveBeenCalled();
      expect(spy).not.toHaveBeenCalledWith(text);
    });

    it('should reset the text property', () => {
      const text = 'SomeText';

      component.text = text;
      component.onSubmit();

      expect(component.text).toBe('');
    });
  });
});
