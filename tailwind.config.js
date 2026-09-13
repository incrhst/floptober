export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        flop: {
          yellow: '#e9c93e',
          yellowDeep: '#d8b52f',
          ink: '#2b2622',
          crimson: '#d34766',
          sea: '#2e6f9e',
          cream: '#faf7ee',
          moss: '#6f8f4f',
          dust: '#b9a89a',
        },
      },
      fontFamily: {
        hand: ['"Gochi Hand"', 'cursive'],
        body: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        chunk: '0 6px 0 0 rgba(43, 38, 34, 0.22)',
        chunkSm: '0 4px 0 0 rgba(43, 38, 34, 0.22)',
        press: '0 2px 0 0 rgba(43, 38, 34, 0.22)',
        sea: '0 6px 0 0 #2e6f9e',
        seaPress: '0 2px 0 0 #2e6f9e',
      },
      borderRadius: {
        blob: '1.75rem',
      },
    },
  },
}
