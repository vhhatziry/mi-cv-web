import { defineConfig } from 'vite'
import path from 'path' // ⬅️ Paso 1: Importa 'path'

export default defineConfig({
    // Paso 2: La ruta base que ya tenías
    base: '/mi-cv-web/', 

    // Plugins que ya tenías (si aplica)
    plugins: [/* ... */],

    // Paso 3: Configuración para Multi-Página
    build: {
        rollupOptions: {
            input: {
                // Entrada principal
                main: path.resolve(__dirname, 'index.html'),
                
                // Entradas secundarias (¡Tus páginas!)
                formacion: path.resolve(__dirname, 'pages/formacion.html'),
                hobbies: path.resolve(__dirname, 'pages/hobbies.html'),
                criptografia: path.resolve(__dirname, 'pages/criptografia.html'),
                'llave-publica': path.resolve(__dirname, 'pages/llave-publica.html'), // Usé el nombre de archivo sin guión bajo para el key
            }
        }
    }
})