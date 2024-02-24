import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'transactions-section',
	template: `
		<section class="px-24 py-32 bg-white bg-opacity-5">
			<p class ="text-center text-3xl">
				Transacciones aqui.
			</p>
		</section>
	`,
	standalone: true,
})

export class TransactionsSectionComponent {}