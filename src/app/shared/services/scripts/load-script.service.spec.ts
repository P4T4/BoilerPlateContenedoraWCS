import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoadScriptService } from '@shared/services/scripts/load-script.service';

describe('LoadScriptService', () => {
  let service: LoadScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadScriptService);
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debería usar lazy loading para cargar script en el DOM', fakeAsync(() => {
    const script = 'https://wcdigital.segurossura.com.co/wc-avs/wc-avs.js';
    service.loadScript(script);
    tick();

    const scripts = document.getElementsByTagName('script');
    let resultado: Boolean = false;
    for (let i = scripts.length; i--; ) {
      if (scripts[i].src === script) {
        resultado = true;
        break;
      }
    }

    expect(resultado).toBeTrue();
  }));

  it('debería emitir error cuando se genera un error al cargar script en el DOM', fakeAsync(() => {
    const script = 'script-no-valido.js';
    service.loadScript(script).subscribe({
      error: (error) => {
        const scripts = document.getElementsByTagName('script');
        let resultado: Boolean = false;
        for (let i = scripts.length; i--; ) {
          if (scripts[i].src === script) {
            resultado = true;
            break;
          }
        }

        expect(resultado).toBeFalse();
        expect(error.toString()).toEqual(
          'Error: No se pudo acceder al script script-no-valido.js',
        );
      },
    });
  }));
});
