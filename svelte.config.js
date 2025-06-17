import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			// these are the aliases and paths to them
			$components: path.resolve(__dirname, './src/components'),
			$config: path.resolve(__dirname, './src/config'),
			$layouts: path.resolve(__dirname, './src/layouts'),
			$lib: path.resolve(__dirname, './src/lib'),
			$models: path.resolve(__dirname, './src/lib/models'),
			$services: path.resolve(__dirname, './src/lib/services'),
			$stores: path.resolve(__dirname, './src/stores'),
			$styles: path.resolve(__dirname, './src/lib/styles'),
			$utils: path.resolve(__dirname, './src/lib/utils')
		}
	}
}

export default config
