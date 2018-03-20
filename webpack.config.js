module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' }
    ]
  }
}