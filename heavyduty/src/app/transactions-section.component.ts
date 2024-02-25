import { Component, inject } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatCard } from "@angular/material/card";
import { ShyftApiService } from "./shyft-api.service";
import { WalletStore } from "@heavy-duty/wallet-adapter";
import { toSignal } from "@angular/core/rxjs-interop";
import { computedAsync } from 'ngxtension/computed-async';

@Component({
	selector: 'transactions-section',
	imports: [MatTableModule, MatCard],
	template: `
		<mat-card class="px-24 py-5 bg-white bg-opacity-5">
			<p class ="text-center text-3xl">
				Transacciones
			</p>
	
			@if (!transactions()) {
				<p class="text-center">Wallet no conectada</p>
			}
			@else if (transactions()?.length === 0) {
				<p class="text-center">No hay transacciones disponibles.</p>
			}
			@else {
				<table mat-table class="w-1/2" [dataSource] = "transactions() ?? []">
					<ng-container matColumnDef="timestamp">
						<th mat-header-cell *matHeaderCellDef> Timestamp </th>
						<td mat-cell *matCellDef="let element">{{element.timestamp}}</td>
					</ng-container>

					<ng-container matColumnDef="type">
						<th mat-header-cell *matHeaderCellDef> Tipo </th>
						<td mat-cell *matCellDef="let element">{{element.type}}</td>
					</ng-container>

					<ng-container matColumnDef="status">
						<th mat-header-cell *matHeaderCellDef> Estado </th>
						<td mat-cell *matCellDef="let element">{{element.status}}</td>
					</ng-container>
					
					<ng-container matColumnDef="signers">
						<th mat-header-cell *matHeaderCellDef> Emisor </th>
						<td mat-cell *matCellDef="let element">{{element.signers}}</td>
					</ng-container>
					
					<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
					<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
				</table>
			}
		
		</mat-card>
	`,
	standalone: true,
})

export class TransactionsSectionComponent {
	private readonly _shyftApiService = inject(ShyftApiService);
	private readonly _walletStore = inject(WalletStore);
	private readonly _publicKey = toSignal(this._walletStore.publicKey$);

	readonly displayedColumns = ['timestamp', 'status', 'type', 'signers'];
	readonly transactions = computedAsync(() => 
		this._shyftApiService.getTransactions(this._publicKey()?.toBase58()),
);
}