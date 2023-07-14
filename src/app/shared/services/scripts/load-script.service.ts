import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptService {
  private loadedScripts: Record<string, ReplaySubject<void>> = {};

  loadScript(url: string): Observable<void> {
    if (this.loadedScripts[url]) {
      return this.loadedScripts[url].asObservable();
    }
    this.loadedScripts[url] = new ReplaySubject();
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    script.onload = (): void => {
      this.loadedScripts[url].next();
      this.loadedScripts[url].complete();
    };

    script.onerror = (): void => {
      this.loadedScripts[url].error(new Error('No se pudo acceder al script ' + url));
      this.loadedScripts[url] = undefined!;
      script.remove();
    };

    document.body.appendChild(script);

    return this.loadedScripts[url].asObservable();
  }
}
