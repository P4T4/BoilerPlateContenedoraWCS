import { TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadScriptService } from '@shared/services/scripts/load-script.service';
import { of, throwError } from 'rxjs';

import { LazyElementDirective } from './lazy-element.directive';

describe('LazyElementDirective', () => {
  let directive: LazyElementDirective;
  let viewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let templateRef: jasmine.SpyObj<TemplateRef<any>>;
  let loadScriptService: jasmine.SpyObj<LoadScriptService>;

  beforeEach(() => {
    viewContainerRef = jasmine.createSpyObj('ViewContainerRef', [
      'clear',
      'createEmbeddedView',
    ]);
    templateRef = jasmine.createSpyObj('TemplateRef', ['']);
    loadScriptService = jasmine.createSpyObj('LoadScriptService', [
      'loadScript',
    ]);

    directive = new LazyElementDirective(
      viewContainerRef,
      templateRef,
      loadScriptService,
    );
  });

  it('debería cargar script en vista embebida cuando se provee la url', () => {
    const urlScriptElement = 'https://example.com/script.js';
    directive.urlScriptElement = urlScriptElement;
    (loadScriptService.loadScript as jasmine.Spy).and.returnValue(
      of(undefined),
    );

    directive.ngOnInit();

    expect(loadScriptService.loadScript).toHaveBeenCalledWith(urlScriptElement);
    expect(viewContainerRef.clear).toHaveBeenCalled();
    expect(viewContainerRef.createEmbeddedView).toHaveBeenCalledWith(
      templateRef,
    );
  });

  it('debería mostrar modal alerta script si falla al cargar', () => {
    const urlScriptElement = 'https://example.com/script.js';
    directive.urlScriptElement = urlScriptElement;
    (loadScriptService.loadScript as jasmine.Spy).and.returnValue(
      throwError(undefined),
    );
    (modalAlertService.esVisible as jasmine.Spy).and.returnValue(false);

    directive.ngOnInit();

    expect(modalAlertService.alertaFalloOpcion).toHaveBeenCalled();
  });

  it('no debería cargar script ni vista embebida si urlScriptElement es nulo', () => {
    directive.urlScriptElement = null;
    directive.ngOnInit();
    expect(loadScriptService.loadScript).not.toHaveBeenCalled();
    expect(viewContainerRef.clear).not.toHaveBeenCalled();
    expect(viewContainerRef.createEmbeddedView).not.toHaveBeenCalled();
  });
});
