"use client";
import { signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const From = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const googleLoginHandler = function () {
    signIn("google", { callbackUrl: "/dashboard", redirect: false });
  };

  const formHandler = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // with this below code the user will be signed in and it will be redirected
    // to the page that we mentioned in the callbackUrl. But avoid this way
    // of signin because in this way we cannot handle the case where the
    // user is not authenticated and we have error in our response from the
    // backend server.

    // signIn("first-provider", {
    //   email: inputRef.current?.value,
    //   password: passwordRef.current?.value,
    //   callbackUrl: "/dashboard",
    // });

    // use the below method to signin

    const res = await signIn("first-provider", {
      email: inputRef.current?.value,
      password: passwordRef.current?.value,
      callbackUrl: "/dashboard",
      redirect: false,
      //always keep this property and make it false otherwise in case
      // of error also we will be directed to default login and logout
      //  error page which is provided be next-auth.
      // WE DON'T NEED THIS WHEN USINF O-AUTH ONLY NEEDED FOR CUSTOM CREDENTIALS
    });
    console.log("response from", res);

    if (!res?.error) {
      router.push("/dashboard");
    }
  };
  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col w-[300px] gap-3 m-3 p-3"
    >
      <input
        type="text"
        name="email"
        placeholder="email"
        className="text-blue-600"
        ref={inputRef}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="text-blue-600"
        ref={passwordRef}
      />
      <button type="submit" className="bg-pink-400 rounded">
        Login
      </button>
      <button type="button" onClick={googleLoginHandler}>
        Login with google
      </button>
    </form>
  );
};

export default From;
