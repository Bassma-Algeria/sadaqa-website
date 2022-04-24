module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  // presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['babel-plugin-macros', ['styled-components', { ssr: true }]],
};
