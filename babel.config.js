/**
 * Babel config
 *
 * @type {import('@babel/core').ConfigFunction}
 */
module.exports = {
  assumptions: {
    arrayLikeIsIterable: true,
    constantReexports: true,
    ignoreFunctionLength: true,
    ignoreToPrimitiveHint: true,
    mutableTemplateObject: true,
    noClassCalls: true,
    noDocumentAll: true,
    objectRestNoSymbols: true,
    privateFieldsAsProperties: true,
    pureGetters: true,
    setClassMethods: true,
    setComputedProperties: true,
    setPublicClassFields: true,
    setSpreadProperties: true,
    skipForOfIteratorClosing: true,
    superIsCallableConstructor: true
  },

  presets: [
    [
      '@babel/preset-env',
      {
        exclude: ['transform-typeof-symbol'],
        shippedProposals: true
      }
    ]
  ],

  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h', runtime: 'classic' }]
  ]
}