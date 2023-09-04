export interface SplashScreenPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
