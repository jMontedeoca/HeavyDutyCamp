import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { HdWalletMultiButtonComponent } from "@heavy-duty/wallet-adapter-material";
import { ShyftApiService } from "./shyft-api.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { computedAsync } from "ngxtension/computed-async";
import { MatAnchor } from "@angular/material/button";

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'heavyduty-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly  account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
  { requireSync: true },
  );
}
