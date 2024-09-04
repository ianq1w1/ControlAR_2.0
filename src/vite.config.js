import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Livewire/**',
            ],
        }),
    ],
    build: {
        outDir: 'public/build',
        manifest: true,
      },
      server: {
        host: true,  // This is needed to make it accessible in Docker
      },
    
});
