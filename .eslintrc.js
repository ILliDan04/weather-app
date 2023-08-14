module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
}
