import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: false,
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    await SplashScreen.show({
      autoHide: true,
    });

    setTimeout(async () => {
      await SplashScreen.hide();
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }, 2000);
  }
}
