module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest', // Usar Babel para transformar archivos JS/JSX
  },
  testEnvironment: 'jest-environment-jsdom', // Usar JSDOM para simular un navegador
};

  
  