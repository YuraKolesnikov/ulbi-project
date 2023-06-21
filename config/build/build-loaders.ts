import type webpack from 'webpack'

import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/build-css-loader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const styleLoaders = buildCssLoader(options.isDev)

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    tsLoader,
    styleLoaders,
    svgLoader,
    fileLoader,
  ]
}
