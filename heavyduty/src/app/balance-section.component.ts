import { Component, inject } from '@angular/core';
import { ShyftApiService } from "./shyft-api.service";
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from "@angular/core/rxjs-interop";
import { computedAsync } from "ngxtension/computed-async";
import { MatCard } from "@angular/material/card";

@Component({
	selector: 'balance-section',
	imports: [MatCard],
	template: `
		<mat-card class="px-24 py-5 bg-white bg-opacity-5">
			<p class ="text-center text-3xl">
				Balance
			</p>
			@if (!account()) {
				<p class="text-center">Wallet no conectada.</p>
			}
			@else {
				<div class ="flex justify-center items-center gap-2 mt-5">
				<img [src]="account()?.info?.image" class = "w-10 h-10" />
				<p class="text-xl">{{ account()?.info?.name }}</p>
				<p class="text-xl">{{ account()?.balance }}</p>
				</div>
			}
		</mat-card>
	`,
	standalone: true,
})

export class BalanceSectionComponent {
	private readonly _shyftApiService = inject(ShyftApiService);
	private readonly _walletStore = inject(WalletStore);
	private readonly _publicKey = toSignal(this._walletStore.publicKey$);

readonly  account = computedAsync(
	() => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
  { requireSync: true },
  );
  }
  