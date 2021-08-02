import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { uglify } from "rollup-plugin-uglify";
import replace from 'rollup-plugin-replace';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.es.js',
            format: 'esm',            
        },
    ],
    plugins: [
        peerDepsExternal(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        babel({
            exclude: 'node_modules/**',
            extensions,
        }),
        postcss({
            config: {
                path: './postcss.config.js',
            },
            extensions: ['.css'],
            minimize: true,
            inject: {
                insertAt: "top",
              },
              sourceMap: false,
        }),
        resolve(),
        commonjs(),
        terser(),
        filesize(),
        uglify(),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            }),
    ],
};