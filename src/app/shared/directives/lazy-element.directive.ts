import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadScriptService } from '../services/scripts/load-script.service';

@Directive({
  selector: '[lazyElement]',
})
export class LazyElementDirective implements OnInit {
  @Input('lazyElement') urlScriptElement: string | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private loadScriptService: LoadScriptService,
  ) {}

  ngOnInit(): void {
    this.initCustomElement();
  }

  private initCustomElement(): void {
    if (this.urlScriptElement) {
      this.loadScriptService.loadScript(this.urlScriptElement).subscribe({
        next: () => {
          this.viewContainerRef.clear();
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        },
        error: () => {
          // TODO: Falta método de error
        },
      });
    }
  }
}
