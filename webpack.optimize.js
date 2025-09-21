const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Webpack optimization configuration for AstroMANIA Enterprise
module.exports = {
  mode: 'production',

  // Performance optimizations
  performance: {
    maxAssetSize: 250000,
    maxEntrypointSize: 250000,
    hints: 'warning'
  },

  // Optimization settings
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug']
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        extractComments: false,
      }),
    ],

    // Code splitting
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Vendor chunk for all node_modules
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
        },

        // MUI specific chunk (large library)
        mui: {
          test: /[\\/]node_modules[\\/]@mui[\\/]/,
          name: 'mui',
          chunks: 'all',
          priority: 20,
          reuseExistingChunk: true,
        },

        // Framer Motion chunk
        framerMotion: {
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          name: 'framer-motion',
          chunks: 'all',
          priority: 15,
          reuseExistingChunk: true,
        },

        // Common chunk for shared code
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        }
      },
    },

    // Runtime chunk
    runtimeChunk: {
      name: 'runtime'
    },

    // Module concatenation
    concatenateModules: true,

    // Tree shaking
    usedExports: true,
    sideEffects: false
  },

  // Resolve optimizations
  resolve: {
    // Faster module resolution
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],

    // Extension resolution order
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],

    // Alias for faster imports
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@theme': path.resolve(__dirname, 'src/theme'),
    },

    // Symlinks resolution
    symlinks: false,

    // Cache resolution
    unsafeCache: true
  },

  // Module rules for optimization
  module: {
    rules: [
      // TypeScript/JavaScript optimization
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'entry',
                corejs: 3,
                targets: {
                  browsers: ['> 1%', 'not dead']
                }
              }],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              ['@babel/plugin-transform-runtime', {
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: true
              }]
            ],
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },

      // CSS optimization
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                  ['cssnano', {
                    preset: 'default'
                  }]
                ]
              }
            }
          }
        ]
      },

      // Image optimization
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {
          filename: 'static/media/[name].[hash:8][ext]'
        }
      }
    ]
  },

  // Plugins for optimization
  plugins: [
    // Define environment variables
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.REACT_APP_VERSION': JSON.stringify(process.env.npm_package_version),
    }),

    // Compression plugin
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),

    // Bundle analyzer (only if ANALYZE=true)
    ...(process.env.ANALYZE === 'true' ? [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle-report.html'
      })
    ] : []),

    // Module concatenation
    new webpack.optimize.ModuleConcatenationPlugin(),

    // Ignore moment.js locales
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    })
  ],

  // Cache configuration
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    },
    cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/webpack')
  },

  // Experimental optimizations
  experiments: {
    topLevelAwait: true,
    layers: true
  },

  // Stats configuration
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    timings: true,
    assets: true,
    warnings: true,
    errors: true,
    errorDetails: true
  }
};

// Export function for dynamic configuration
module.exports.createOptimizedConfig = (env = {}) => {
  const isProduction = env.NODE_ENV === 'production';
  const isAnalyze = env.ANALYZE === 'true';

  return {
    ...module.exports,
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'cheap-module-source-map',
    plugins: [
      ...module.exports.plugins,
      ...(isAnalyze ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true
        })
      ] : [])
    ]
  };
};

// Memory optimization helper
module.exports.optimizeMemory = () => {
  // Increase Node.js memory limit
  if (process.env.NODE_OPTIONS) {
    process.env.NODE_OPTIONS += ' --max-old-space-size=4096';
  } else {
    process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  }

  // Garbage collection optimization
  if (global.gc) {
    setInterval(() => {
      global.gc();
    }, 30000); // Run GC every 30 seconds
  }
};

// Build performance tips
module.exports.performanceTips = {
  recommendations: [
    'Use GENERATE_SOURCEMAP=false for faster builds',
    'Enable TypeScript incremental compilation',
    'Use webpack cache for subsequent builds',
    'Consider lazy loading for large components',
    'Optimize images and use WebP format',
    'Use tree shaking to eliminate dead code',
    'Split vendor bundles for better caching',
    'Enable compression for production builds'
  ],

  memoryOptimization: [
    'Increase Node.js heap size with NODE_OPTIONS=--max-old-space-size=4096',
    'Use skipLibCheck in TypeScript for faster compilation',
    'Disable source maps in production builds',
    'Use filesystem cache for webpack',
    'Enable parallel processing where possible'
  ]
};
