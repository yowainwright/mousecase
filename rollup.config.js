import babel from 'rollup-plugin-babel'
// import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import {
  author,
  description,
  homepage,
  license,
  main,
  module,
  name,
  version,
} from './package.json'

const uglifyOutput = {
  output: {
    comments: function (node, comment) {
      const text = comment.value
      const type = comment.type
      if (type === 'comment2') {
        // multiline comment
        return /@preserve|@license|@cc_on/i.test(text)
      }
    },
  },
}

// babel config
const loose = true

const babelSetup = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false, loose }]],
  plugins: [['@babel/plugin-proposal-class-properties', { loose }]],
}

const banner = `/**
  ${name} - ${description}
  @version v${version}
  @link ${homepage}
  @author ${author}
  @license ${license}
**/`

const ensureArray = maybeArr =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ input, output, env } = {}) => {
  const plugins = [
    babel(babelSetup),
  ]

  if (env === 'production') plugins.push(uglify(uglifyOutput))

  return {
    input,
    plugins,
    output: ensureArray(output).map(format =>
      Object.assign({}, format, {
        banner,
        name,
      })
    ),
  }
}

export default [
  createConfig({
    input: 'src/index.js',
    output: [{ file: main, format: 'cjs' }, { file: module, format: 'es' }],
  }),
  createConfig({
    input: 'src/index.js',
    output: {
      file: 'dist/pulley.min.js',
      format: 'umd',
    },
    env: 'production',
  }),
]
