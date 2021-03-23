import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GeneratorComponent ],
  providers: [AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
