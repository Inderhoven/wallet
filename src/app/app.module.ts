import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WalletService } from './services/wallet.service';
import { LockComponent } from './lock/lock.component';
import { MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { LockConfirmDialog } from './lock/confirm-lock/confirm-lock.component';
import { LoadConfigDialog } from './lock/load-config/load-config.component';
import { UnLockComponent } from './lock/unlock/unlock.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SeedEditDialog } from './main/edit-seed/seed-edit.component';
import { MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort'
import { ConfigErrorComponent } from './lock/config-error/config-error.component';
import { NotifysComponent } from './notifys/notifys.component';
import { ConfirmDialog } from './core/confirm-dialog/confirm-dialog.component';
import { OkDialog } from './core/ok-dialog/ok-dialog.component';
import { RevealSeedDialog } from './main/reveal-seed/reveal-seed.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import { ApiService } from './services/api.service';
import { SettingsComponent } from './settings/settings.component';
import { BalanceComponent } from './balance/balance.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrReceiveDialog } from './main/qr-receive/qr-receive.component';
import { TranslocoRootModule } from './transloco-root.module';
import { LanguageChooserComponent } from './core/language-chooser/language-chooser.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdaterService } from './services/updater-service';
import {MatTabsModule} from '@angular/material/tabs';
import { AccountComponent } from './settings/account/account.component';
import { ExportComponent } from './settings/export/export.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { VotingComponent } from './voting/voting.component';
import { VotingParticipateComponent } from './voting/participate/voting-participate.component';
import { VotingCreateComponent } from './voting/create/voting-create.component';
import {MatStepperModule} from '@angular/material/stepper';
import { VotingStatusComponent } from './voting/voting-status/voting-status.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IpoComponent } from './ipo/ipo.component';
import { PlaceBidComponent } from './ipo/place-bid/place-bid.component';
import { TransferStatusComponent } from './core/transfer-status/transfer-status.component';
import { SettingsGeneralComponent } from './settings/general/general.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { QubicService } from './services/qubic.service';
import { DecimalPipe } from '@angular/common';
import { TokenService } from './services/token.service';
import { VisibilityService } from './services/visibility.service';
import { AssetsDialog } from './main/assets/assets.component';



/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    PaymentComponent,
    LockComponent,
    LockConfirmDialog,
    UnLockComponent,
    SeedEditDialog,
    ConfigErrorComponent,
    NotifysComponent,
    ConfirmDialog,
    OkDialog,
    LoadConfigDialog,
    RevealSeedDialog,
    SettingsComponent,
    BalanceComponent,
    QrReceiveDialog,
    LanguageChooserComponent,
    WelcomeComponent,
    AccountComponent,
    ExportComponent,
    VotingComponent,
    VotingParticipateComponent,
    VotingCreateComponent,
    VotingStatusComponent,
    IpoComponent,
    PlaceBidComponent,
    TransferStatusComponent,
    SettingsGeneralComponent,
    AssetsDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    ClipboardModule,
    MatTooltipModule,
    HttpClientModule,
    QRCodeModule,
    TranslocoRootModule,
    MatTabsModule,
    NgxFileDropModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
  ],

  providers: [VisibilityService, TokenService, WalletService, AuthInterceptor, ApiService, UpdaterService, QubicService, DecimalPipe, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
