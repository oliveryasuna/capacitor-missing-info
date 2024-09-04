import type {CapacitorConfig} from '@capacitor/cli';
import {DEV_SERVER_ADDRESS, DEV_SERVER_PORT} from '../../../utils/dev';
import deepmerge from 'deepmerge';

const CONFIG_BASE: CapacitorConfig = {
  appId: 'com.oliveryasuna.yearmonthpickerdemo',
  appName: 'YearMonthPicker Demo',
  webDir: 'dist',
  plugins: {
    YearMonthPicker: {}
  }
};

let config: CapacitorConfig = CONFIG_BASE;

if(process.env['MODE'] === 'development') {
  const devServerUrl: string = `http://${DEV_SERVER_ADDRESS}:${DEV_SERVER_PORT.toString()}`;

  config = deepmerge(
      config,
      {
        loggingBehavior: 'production',
        server: {
          allowNavigation: [devServerUrl],
          cleartext: true,
          url: devServerUrl
        }
      }
  );
}

export default config;
