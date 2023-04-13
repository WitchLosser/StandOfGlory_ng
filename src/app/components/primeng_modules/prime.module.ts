import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Buttons
import { ButtonModule } from 'primeng/button';
//Galleria
import { GalleriaModule } from 'primeng/galleria';
//Divider
import { DividerModule } from 'primeng/divider';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        BrowserAnimationsModule,
        CardModule,
        ButtonModule,
        GalleriaModule,
        DividerModule   
    ]
})
export class PrimeModule { }