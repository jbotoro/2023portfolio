/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/images/**",
			},
		],
		domains: ["cdn.sanity.io"],
	},
};

module.exports = nextConfig;
