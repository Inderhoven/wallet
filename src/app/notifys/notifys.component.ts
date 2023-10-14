import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';
import {MatDialog} from '@angular/material/dialog';
import { LockConfirmDialog } from '../lock/confirm-lock/confirm-lock.component';
import { QubicService } from '../services/qubic.service';


@Component({
  selector: 'qli-notifys',
  templateUrl: './notifys.component.html',
  styleUrls: ['./notifys.component.scss']
})
export class NotifysComponent implements OnInit {

  public isNodeConnected = false;
  public useBridge = false;

  constructor(private cd: ChangeDetectorRef, public walletService: WalletService, public dialog: MatDialog, private q: QubicService){
   
  }
  ngOnInit(): void {
    this.q.isConnected.subscribe(s => {
      this.isNodeConnected = s;
      this.cd.detectChanges();
    });
    this.walletService.config.subscribe(s => {
      this.useBridge = s.useBridge;
      this.cd.detectChanges();
    });
  }
  
  connect(): void{
    this.q.connect();
  }
  disconnect(): void{
    this.q.disconnect();
  }

  sync(): void {
    
  }

  lock(): void {
    const dialogRef = this.dialog.open(LockConfirmDialog, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => {
      // do anything :)
    });
  }
 
}
