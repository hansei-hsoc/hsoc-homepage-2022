/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		styledComponents: true,
	},

	webpack(conf) {
		conf.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return conf;
	},
};

module.exports = nextConfig;
