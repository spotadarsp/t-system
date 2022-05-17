import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';
import { ImgurlPipe } from './imgurl.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListUserComponent,
    UserComponent,
    ImgurlPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
