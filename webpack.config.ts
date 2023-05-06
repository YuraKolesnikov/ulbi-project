import path from 'path'
import webpack from 'webpack'
import detect from 'detect-port'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'

import { BuildPaths, BuildEnv } from './config/build/types/config'

export default async (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development',
    isDev = mode === 'development'

  const availablePort = await detect(+env.port)

  if (+env.port !== availablePort) {
    console.log(
      `Port ${env.port} is already in use. Trying ${availablePort}...`
    )
  }

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: availablePort,
  })

  return config
}
