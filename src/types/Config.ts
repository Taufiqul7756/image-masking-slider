export interface Config {
  apiUrl: string;

  makeApiUrl: (path: string, base?: string) => string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const config: Config = {
  apiUrl,
  makeApiUrl: (path: string, base: string = apiUrl) => {
    return base + path;
  },
};

export default config;
