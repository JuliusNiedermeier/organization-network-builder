import { initializeApp, applicationDefault } from "firebase-admin/app";
import "dotenv/config";

export const app = initializeApp({ credential: applicationDefault() });
