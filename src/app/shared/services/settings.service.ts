import { Injectable, InjectionToken, Inject } from '@angular/core';

export class Settings {
  public endpointOpenLibrary: string;
  public defaultPageLimite: 10;
}

export const SETTINGS = new InjectionToken<Settings>('SETTINGS');

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(@Inject(SETTINGS) private settings: Settings) { 
    
  }

  public getSettings(): Settings {
    return this.settings;
  }

  public get endpointOpenLibrary() {
    return this.settings.endpointOpenLibrary;
  }

  public get defaultPageLimite() {
    return this.settings.defaultPageLimite;
  }
}
