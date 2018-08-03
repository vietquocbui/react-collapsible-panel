import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

// 'amd', 'cjs', 'system', 'esm', 'iife' or 'umd'
export default (env) => {
  env = env.substring(0, 3);
  const scss = {
    file: 'src/scss/styles.scss',
    outFile: `dist/react-collapsible-panel.${env}.css`,
    outputStyle: env === 'pro' ? 'compressed' : 'expanded'
  };

  const rollup = {
    input: 'src/index.js',
    output: {
      file: `dist/react-collapsible-panel.${env}.js`,
      format: 'cjs',
      name: 'ReactCollapsiblePanel',
      globals: {
        react: 'React',
        "prop-types": 'PropTypes'
      }
    },
    external: ['react', 'prop-types'],
    plugins: [
      resolve({ jsnext: true, main: true }),
      replace({ "process.env.NODE_ENV": JSON.stringify('production') }),
      commonjs({ include: 'node_modules/**', sourceMap: false }),
      babel({
        babelrc: false,
        presets: ['react', ['env', { modules: false }]],
        plugins: ["external-helpers", "transform-object-rest-spread"],
        exclude: 'node_modules/**'
      }),
      env === 'pro' ? minify() : {},
    ]
  }

  return { rollup, scss }
}