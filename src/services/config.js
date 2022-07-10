// const devBaseURL = "http://123.207.32.32:9001/";
// const proBaseURL = "http://123.207.32.32:9001/";

// 本地
const devBaseURL = "https://netease-cloud-music-api-beryl-zeta.vercel.app/";
const proBaseURL = "https://netease-cloud-music-api-beryl-zeta.vercel.app/";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
