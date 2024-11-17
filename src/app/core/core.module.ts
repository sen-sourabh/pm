import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from './components/cards/card.component';
import { PageheaderComponent } from './components/pageheader/pageheader.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PreventCtrlSDirective } from './directives/prevent-ctrl-s.directive';
import { ConvertRouteToLabelPipe } from './pipes/convert-route-to-label.pipe';
import { CapitalizeFirstLetterPipe, ToUppercasePipe } from './pipes/to-uppercase.pipe';

@NgModule({
  declarations: [
    ToUppercasePipe,
    HighlightDirective,
    PageheaderComponent,
    CardComponent,
    ConvertRouteToLabelPipe,
    PreventCtrlSDirective,
    CapitalizeFirstLetterPipe,
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
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    ToUppercasePipe,
    CapitalizeFirstLetterPipe,
    HighlightDirective,
    PageheaderComponent,
    CardComponent,
    PreventCtrlSDirective,
  ],
})
export class CoreModule {}
