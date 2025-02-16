import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateModule } from '@keira-shared/modules/create/create.module';
import { HighlightjsWrapperModule } from '@keira-shared/modules/highlightjs-wrapper/highlightjs-wrapper.module';
import { QueryOutputModule } from '@keira-shared/modules/query-output/query-output.module';
import { SearchButtonsModule } from '@keira-shared/modules/search-button/search-buttons.module';
import { TopBarModule } from '@keira-shared/modules/top-bar/top-bar.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectCreatureComponent } from './select-creature.component';
import { SelectCreatureService } from './select-creature.service';

@NgModule({
  declarations: [SelectCreatureComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TopBarModule,
    QueryOutputModule,
    CreateModule,
    HighlightjsWrapperModule,
    NgxDatatableModule,
    SearchButtonsModule,
    HighlightjsWrapperModule,
  ],
  exports: [SelectCreatureComponent],
  providers: [SelectCreatureService],
})
export class SelectCreatureModule {}
