module.exports = {
  name: 'demo-one-feature-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../tmp/coverage/libs/demo-one/feature/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
