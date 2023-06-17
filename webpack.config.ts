import path from 'path'
import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/build-webpack-config'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const port = env.port || 3000
  const mode: BuildMode = env.mode || 'development'

  return buildWebpackConfig({
    port,
    mode,
    paths,
    isDev: mode === 'development',
  })
}
