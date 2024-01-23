import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectorRef, Component, Inject, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { QubicDialogWrapper } from 'src/app/core/dialog-wrapper/dialog-wrapper';
import { ThemeService } from 'src/app/services/theme.service';
import { WalletService } from 'src/app/services/wallet.service';


@Component({
  selector: 'qli-lock-confirm',
  templateUrl: './confirm-lock.component.html',
  styleUrls: ['./confirm-lock.component.scss']
})
export class LockConfirmDialog extends QubicDialogWrapper {

  public showSave: boolean = false;

  exportForm = this.fb.group({
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  public keyDownload = false;

  constructor(renderer: Renderer2, themeService: ThemeService, @Inject(MAT_DIALOG_DATA) public data: any, private chdet: ChangeDetectorRef, public walletService: WalletService, private fb: FormBuilder, private dialogRef: DialogRef, private transloco: TranslocoService) {
    super(renderer, themeService);
    if (data && data.command && data.command == "keyDownload") {
      this.keyDownload = true;
    }
  }

  toggleShowSave() {
    if (this.showSave) {
      this.showSave = false;
    } else {
      this.showSave = true;
    }
    this.chdet.detectChanges();
  }

  onSubmit(): void {
    if (this.exportForm.valid && this.exportForm.controls.password.value) {
      this.walletService.exportKey(this.exportForm.controls.password.value).then(r => {
      });
      this.walletService.isWalletReady = true;
      this.dialogRef.close();
    }
  }

  closeWallet() {
    this.walletService.isWalletReady = false;
    this.walletService.lock();
    this.dialogRef.close();
  }

}
