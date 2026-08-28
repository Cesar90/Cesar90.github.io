import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './configwebpack/build/buildWebpackConfg';
import { BuildEnv, BuildPaths } from './configwebpack/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'components', 'react', 'index.tsx'),
        // build: path.resolve(__dirname, 'static', 'javascript'),
        build: path.resolve(__dirname, 'dist'),
        tailwind: path.resolve(__dirname, 'components'),
        // src: path.resolve(__dirname, 'components', 'react'),
        src: path.resolve(
            __dirname,
            'components',
            'react',
        ),
        html: path.resolve(
            __dirname,
            'public',
            'index.html',
        ),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = 3001;

    const config: webpack.Configuration = buildWebpackConfig({
        // mode: 'development',
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
