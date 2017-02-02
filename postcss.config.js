module.exports = ctx => {
  const browsers = ctx.env === 'development' ?
  [
    'last 1 chrome version',
    'last 1 safari version',
  ] : [
    '>1%',
    'last 2 versions',
    'not ie < 10',
  ];

  return {
    plugins: [
      require('autoprefixer')(
        {
          remove: false,
          browsers,
        }
      ),
      require('postcss-merge-rules')(),
      require('css-mqpacker')(),
    ],
  };
};
