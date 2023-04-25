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
// Calendar
import { CalendarModule } from 'primeng/calendar';
// Input Text
import { InputTextModule } from 'primeng/inputtext';
// Dropdown
import { DropdownModule } from 'primeng/dropdown';
// Menu
import { MenubarModule } from 'primeng/menubar';
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
         DividerModule,   
        CalendarModule,
        InputTextModule,
        DropdownModule,
        MenubarModule

    ]
})
export class PrimeModule { }