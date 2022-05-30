import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2'

export default {
	input: './src/index.ts',
	output: [
		{
			file: './dist/my-lib-umd.js',
			format: 'umd',
			name: 'myLib',
			//当入口文件有export时，'umd'格式必须指定name
			//这样，在通过<script>标签引入时，才能通过name访问到export的内容。
		},
		{
			file: './dist/my-lib-es.js',
			format: 'es',
		},
		{
			file: './dist/my-lib-cjs.js',
			format: 'cjs',
		},
	],
	plugins: [
		commonjs(),
		typescript({
			useTsconfigDeclarationDir: true,
		}),
		babel({
			exclude: 'node_modules/**',
		}),
		postcss({
			plugins: [autoprefixer(), cssnano()],
			extract: 'css/index.css',
		}),
		vue(),
		terser(),
		serve({
			contentBase: '', //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
			port: 8020, //端口号，默认10001
		}),
		livereload('dist'), //watch dist目录，当目录中的文件发生变化时，刷新页面
	],
}
