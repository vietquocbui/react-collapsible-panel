import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default () => {
  const scss = {
    file: 'example/example.scss',
    outFile: 'dist/example/example.css'
  }

  const rollup = {
    input: 'example/index.js',
    output: {
      file: 'dist/example/example.js',
      format: 'iife',
      name: 'example',
      globals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "prop-types": 'PropTypes'
      }
    },
    external: ['react', 'prop-types', 'react-dom'],
    plugins: [
      resolve({ jsnext: true, main: true }),
      replace({ "process.env.NODE_ENV": JSON.stringify('production') }),
      commonjs({ include: 'node_modules/**', sourceMap: false }),
      babel({
        babelrc: false,
        presets: ['react', ['env', { modules: false }]],
        plugins: ["external-helpers", "transform-object-rest-spread"],
        exclude: 'node_modules/**'
      })
    ]
  }

  return { scss, rollup }
};