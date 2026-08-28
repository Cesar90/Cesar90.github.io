import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins: webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),

        new HtmlWebpackPlugin({
            template: paths.html,
            inject: 'body',
        }),
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin(),
        );

        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerHost: '0.0.0.0',
            }),
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        );
    }

    return plugins;
}
