import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const tailwindConfig = await import('./tailwind.config.js');

export default {
  plugins: [tailwind(tailwindConfig.default), autoprefixer],
};