import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from "@heavy-duty/wallet-adapter-material";

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'heavyduty-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'heavyduty';
}
