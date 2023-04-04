import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
// Buttons
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        BrowserAnimationsModule,
        CardModule,
        AccordionModule,
        ButtonModule   
    ]
})
export class PrimeModule { }