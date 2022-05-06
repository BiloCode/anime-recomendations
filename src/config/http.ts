import { DEV_MOVE } from "./constants";

export const SERVER_URL = DEV_MOVE ? "http://localhost:3000" : "";
export const API_URL = Object.freeze("https://jsonplaceholder.typicode.com");
