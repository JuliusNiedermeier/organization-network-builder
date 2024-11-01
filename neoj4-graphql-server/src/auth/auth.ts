import { app } from "./initializeFirebase";
import { getAuth } from "firebase-admin/auth";

export const auth = getAuth(app);
