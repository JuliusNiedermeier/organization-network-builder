import { Button } from "$src/ui-system";
import { Component } from "solid-js";
import { auth } from "$src/lib/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { user } from "solid-heroicons/solid";

const provider = new GoogleAuthProvider();

export const LoginScreen: Component = () => {
  const handleLoginRequest = () => signInWithRedirect(auth, provider);

  return (
    <Button
      variant="vague"
      label="Authenticate with Google"
      onClick={handleLoginRequest}
      leadingIcon={user}
    />
  );
};
