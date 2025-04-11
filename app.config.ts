import { defineConfig } from '@tanstack/solid-start/config'
import { virtualRoutesConfig } from './src/virtual-file-routes'

export default defineConfig({
	server: {
		esbuild: {
			options: {
				supported: {
					'top-level-await': true,
				},
			},
		},
	},
  tsr: {
    appDirectory: "src",
		virtualRouteConfig: virtualRoutesConfig,
    routeFileIgnorePattern: ".(spec|test).ts",
  }
});