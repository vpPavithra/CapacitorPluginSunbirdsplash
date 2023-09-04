import { WebPlugin } from '@capacitor/core';

import type { SplashScreenPlugin } from './definitions';

export class SplashScreenWeb extends WebPlugin implements SplashScreenPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
