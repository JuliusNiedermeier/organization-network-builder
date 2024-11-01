import { auth } from "./auth";
import { DecodedIdToken } from "firebase-admin/auth";
import { FirebaseError } from "firebase-admin";

export interface AuthContext {
  user: DecodedIdToken | null;
  error?: FirebaseError | null;
}

export async function authenticateUser(token: string): Promise<AuthContext> {
  if (!token) return { user: null, error: null };

  return auth
    .verifyIdToken(token)
    .then((user) => ({ user, error: null }))
    .catch((error: FirebaseError) => ({ user: null, error }));
}
