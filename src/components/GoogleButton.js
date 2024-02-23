// create google login button with next-auth and chakra-ui

import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleButton() {
  const { data: session, status } = useSession();
  console.log("session", session);
  const loading = status === "loading";

  return (
    <>
      {!session && (
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => signIn("google")}
          isLoading={loading}
        >
          Sign in with Google
        </Button>
      )}
      {session && (
        <Button colorScheme="red" size="md" onClick={() => signOut()}>
          Sign out
        </Button>
      )}
    </>
  );
}
