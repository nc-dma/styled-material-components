import React from 'react';
import { Icon } from '../icons';

const NetworkWifiPath = () => [
  <path fillOpacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" key='path0' />,
  <path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z" key='path1' />,
];

const NetworkWifiIcon = Icon.extend.attrs({
  children: NetworkWifiPath,
})``;

export default NetworkWifiPath;
export { NetworkWifiIcon };
