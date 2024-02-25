import { Component, inject } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { ShyftApiService } from "./shyft-api.service";
import { WalletStore } from "@heavy-duty/wallet-adapter";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
	selector: 'transactions-section',
	imports: [MatTableModule],
	template: `
		<section class="px-24 py-5 bg-white bg-opacity-5">
			<p class ="text-center text-3xl">
				Transacciones aqui.
			</p>
			
		</section>
		<table mat-table>
			<!-- timestamp, type, sender, amount -->
		</table>
	`,
	standalone: true,
})

export class TransactionsSectionComponent {
	private readonly _shyftApiService = inject(ShyftApiService);
	private readonly _walletStore = inject(WalletStore);
	private readonly _publicKey = toSignal(this._walletStore.publicKey$);

}