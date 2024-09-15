import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PreventCtrlSDirective } from './directives/prevent-ctrl-s.directive';
import { ConvertRouteToLabelPipe } from './pipes/convert-route-to-label.pipe';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';

@NgModule({
  declarations: [
    ToUppercasePipe,
    HighlightDirective,
    PageheaderComponent,
    ConvertRouteToLabelPipe,
    PreventCtrlSDirective,
  ],
  imports: [
    CommonModule,
    NgIf,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [ToUppercasePipe, HighlightDirective, PageheaderComponent, PreventCtrlSDirective],
})
export class CoreModule {}
