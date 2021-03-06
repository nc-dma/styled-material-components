import React from 'react';
import { Icon } from '../icons';

const FlagPath = () => [
  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" key='path0' />,
];

const FlagIcon = Icon.extend.attrs({
  children: FlagPath,
})``;

export default FlagPath;
export { FlagIcon };
