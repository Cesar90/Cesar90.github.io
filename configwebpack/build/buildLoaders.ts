import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(
    options: BuildOptions,
): webpack.RuleSetRule[] {
    const codeBabelLoader = buildBabelLoader({
        ...options,
        isTsx: false,
    });

    const tsxCodeBabelLoader = buildBabelLoader({
        ...options,
        isTsx: true,
    });

    /*
     * Your existing SCSS/Tailwind loader.
     */
    const cssLoader = buildCssLoader(options);

    /*
     * Regular CSS files from external libraries.
     *
     * Leaflet imports:
     * node_modules/leaflet/dist/leaflet.css
     */
    const externalCssLoader: webpack.RuleSetRule = {
        test: /\.css$/i,
        include: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    url: true,
                },
            },
        ],
    };

    /*
     * Webpack 5 built-in asset modules.
     *
     * Leaflet CSS references PNG images internally,
     * so Webpack needs to know how to emit them.
     */
    const assetLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name].[contenthash][ext]',
        },
    };

    /*
     * Fonts.
     */
    const fontLoader: webpack.RuleSetRule = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name].[contenthash][ext]',
        },
    };

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,

        externalCssLoader,
        cssLoader,

        assetLoader,
        fontLoader,
    ];
}
