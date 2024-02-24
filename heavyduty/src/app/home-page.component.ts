import { Component, OnInit } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';
import { TransactionsSectionComponent } from "./transactions-section.component";

@Component({
	selector: 'bob-home-page',
	template: ` 
	<bob-hero-section></bob-hero-section>
	<transactions-section></transactions-section>
	<bob-features-section></bob-features-section>
	`,
	standalone: true,
	imports: [HeroSectionComponent, FeaturesSectionComponent, TransactionsSectionComponent],
})

export class HomePageComponent {}