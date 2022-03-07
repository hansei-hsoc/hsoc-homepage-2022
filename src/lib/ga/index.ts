declare global {
	interface Window {
		gtag: (param1: string, param2: string, param3: object) => void;
	}
}

export const GOOGLE_ANALYTICS = "G-T9YYRN9PZW";

export const pageview = (url: string) => window.gtag("config", GOOGLE_ANALYTICS, { page_path: url });
