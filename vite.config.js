import MillionLint from '@million/lint'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

const _plugins = [
	laravel({
		input: 'resources/js/app.tsx',
		refresh: true
	}),
	react(),
	MillionLint.vite()
]

export default defineConfig({
	plugins: _plugins,
	server: {
		host: 'employee-management-system.test'
	}
})
