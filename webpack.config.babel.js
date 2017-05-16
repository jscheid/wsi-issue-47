import webpack from 'webpack';
import SriPlugin from 'webpack-subresource-integrity';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: './test.js',
    output: {
        crossOriginLoading: 'anonymous',
        filename: 'out.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                }),
            },
        ],
    },
    plugins: [
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: true,
        }),
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin('out.css'),
        new OptimizeCssAssetsPlugin(),
    ],
};
