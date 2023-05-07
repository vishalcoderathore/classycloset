import prod from './prod';
import dev from './dev';

let config: typeof prod | typeof dev;

if (process.env.NODE_ENV === 'production') {
  config = prod;
} else {
  config = dev;
}

export default config;
