// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ConfigEnv, defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default ({mode}: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), '');

    const BUILD_DATE = Date.now();
    const VERSION = env.npm_package_version;
    const APP_NAME = 'white-group.ru';

    const MODE_MAPPING = {
        ferma_f: 'ferma-finlyandskiy',
        ferma_s: 'ferma-sinopskaya',
        ferma_cafe: 'ferma-cafe',
        ferma_k_metro_kom: 'ferma-komendantskiy',
        ferma_k_metro_pul: 'ferma-pulkovo',
        ferma_k_metro_td_passage: 'ferma-passazh',
        ferma_k_metro_perekrestok: 'ferma-v-supermarkete-perekrestok',
        chaika: 'chaika',
        deda_f: 'deda-khinkali-finlyandskiy',
        deda_l: 'deda-khinkali-liteyniy',
        deda_k: 'deda-khinkali-karavannaya',
    };

    return defineConfig({
        define: {
            __VERSION__: `"${VERSION}"`,
            __BUILD_DATE__: `"${BUILD_DATE}"`,
            __SYSTEM__: `"${APP_NAME}"`,
            __UNIQUE_STATE__: env.DEV ? '"development"' : `"${VERSION}_${BUILD_DATE}"`,
            __MODE__: `"${env.MODE}"` || '"development"',
        },
        assetsInclude: ['**/*.svg'],
        plugins: [react(), svgr()],
        server: {
            port: env.PORT ? +env.PORT : 3000,
            proxy: {
                '/api/v1': {
                    target: env.API_URL || 'http://localhost:3000',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        base: '',
        build: {
            outDir: `./build/${MODE_MAPPING[mode]}`,
            target: 'esnext',
            minify: true,
            reportCompressedSize: true,
            copyPublicDir: true,
        },
    });
};
