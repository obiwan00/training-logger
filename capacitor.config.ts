import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'training.logger',
  appName: 'training-logger',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
