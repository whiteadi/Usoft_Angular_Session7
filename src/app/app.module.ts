import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { InfoGridComponent } from './info-grid/info-grid.component';

@NgModule({
    declarations: [InfoGridComponent],
    imports: [BrowserModule],
    providers: [],
    entryComponents: [InfoGridComponent]
})
export class AppModule implements DoBootstrap {
    constructor(injector: Injector) {
        const el = createCustomElement(InfoGridComponent, { injector });
        customElements.define('info-grid', el);
    }

    ngDoBootstrap() { }
}