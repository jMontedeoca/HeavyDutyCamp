import { Component, ComponentRef, OnInit } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';
import { TransactionsSectionComponent } from "./transactions-section.component";
import { BalanceSectionComponent } from "./balance-section.component";

@Component({
	selector: 'bob-home-page',
	template: ` 
	<div class="flex justify-center gap-4 p-4">
		<div class="w-1/2"><balance-section></balance-section></div>
		<div class="w-1/2"><transactions-section></transactions-section></div>
	</div>
	<bob-features-section></bob-features-section>
	`,
	standalone: true,
	imports: [HeroSectionComponent, FeaturesSectionComponent, TransactionsSectionComponent, BalanceSectionComponent],
})

export class HomePageComponent {}