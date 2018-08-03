import example from './.configs/example-config';
import component from './.configs/component-config';

const env = process.env.NODE_ENV;
const config = env === 'example' ? example : component;

export default config(env).rollup;