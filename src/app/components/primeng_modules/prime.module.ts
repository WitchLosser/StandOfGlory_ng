import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Buttons
import { ButtonModule } from 'primeng/button';
//Galleria
import { GalleriaModule } from 'primeng/galleria';
// Calendar
import { CalendarModule } from 'primeng/calendar';
// Input Text
import { InputTextModule } from 'primeng/inputtext';
// Dropdown
import { DropdownModule } from 'primeng/dropdown';

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
        CalendarModule,
        InputTextModule,
        DropdownModule
    ]
})
export class PrimeModule { }