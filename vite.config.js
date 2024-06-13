import react from '@vitejs/plugin-react'; // Import the Vite React plugin
import { defineConfig } from 'vite';

export default defineConfig({
plugins: [react()], // Use the Vite React plugin
build: {
sourcemap: true, // Enable source maps generation
},
});