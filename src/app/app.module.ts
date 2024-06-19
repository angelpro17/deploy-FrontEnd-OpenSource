import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./public/pages/home/home.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { PlansComponent } from './public/pages/plans/plans.component';
import { LoginComponent } from './access/enter/login/login.component';
import { RegisterComponent } from './access/enter/register/register.component';
import  {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommentsComponent } from './public/pages/comments/comments.component';
import { MapsComponent } from './public/pages/maps/maps.component';
import {MatToolbar} from "@angular/material/toolbar";
 import {MatFormFieldModule} from "@angular/material/form-field";
import {  Footer} from './public/components/footer/footer.component';
import { Toolbar } from './public/components/toolbar/toolbar.component';
import {MatList, MatListItem} from "@angular/material/list";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { PaymentCardComponent } from './shared/components/payment-card/payment-card.component';
import { PaymentsmethodCardComponent } from './shared/paymentsmethod-card/paymentsmethod-card.component';
import { DestinationComponent } from './public/pages/destination/destination.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlansComponent,
    LoginComponent,
    RegisterComponent,
    CommentsComponent,
    MapsComponent,
    Footer,
    Toolbar,
    PaymentCardComponent,
    PaymentsmethodCardComponent,
    DestinationComponent,

  ],
  imports: [

    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatList,
    MatListItem,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    NgOptimizedImage,
    CardModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    MatToolbar
  ],
  providers: [MessageService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
