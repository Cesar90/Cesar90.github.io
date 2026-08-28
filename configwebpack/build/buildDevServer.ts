import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer(
    options: BuildOptions,
): DevServerConfiguration {
    return {
        port: options.port,

        host: 'localhost',

        open: true,

        hot: true,

        historyApiFallback: true,

        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    };
}
