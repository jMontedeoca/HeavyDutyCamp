import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatAnchor } from '@angular/material/button';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ConnectionStore, WalletStore } from '@heavy-duty/wallet-adapter';
import { ShyftApiService } from './shyft-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { TransferModalComponent } from './transfer-modal.component';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'heavyduty-root',
  template: `
    <header class="py-8 relative">
      <h1 class="text-5xl text-center mb-4">Wallet</h1>
      <div class="flex justify-center mb-4">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>

      <!-- @if (account()) {
        <div class ="flex justify-center items-center gap-2">
          <img [src]="account()?.info?.image" class = "w-8 h-8" />
          <p class="text-xl">{{ account()?.balance }}</p>
        </div>
      } -->

      <!-- <nav>
        <ul class="flex justify-center items-center gap-4">
          <li>
            <a [routerLink]="['']" mat-raised-button>Home</a>
          </li>
          <li>
            <a [routerLink]="['balance']" mat-raised-button>Balance</a>
          </li>
          <li>
            <a [routerLink]="['transactions']" mat-raised-button>Transactions</a>
          </li>
        </ul>
      </nav> -->
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent implements OnInit {
  private readonly _shyftApiService = inject(ShyftApiService);
  // private readonly _walletStore = inject(WalletStore);
  // private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  private readonly _connectionStore = inject(ConnectionStore);

  // readonly account = computedAsync(
  //   () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
  //   { requireSync: true },
  // );

  ngOnInit() {
    this._connectionStore.setEndpoint(this._shyftApiService.getEndpoint());
  }
}
