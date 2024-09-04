import ip from 'ip';

const DEV_SERVER_ADDRESS: string = ip.address();
const DEV_SERVER_PORT: number = 3000;

export {
  DEV_SERVER_ADDRESS,
  DEV_SERVER_PORT
};
