"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const data = useSession();

  const buttonHandler = function () {
    data.status === "authenticated"
      ? router.push("/signout")
      : router.push("/signin");
    // router.push("/signout");
    //this will redirect us to the custom logout page
    // signOut({ callbackUrl: "/signin" });
  };

  return (
    <ul className="flex p-4 justify-around">
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="about">
        <li>About</li>
      </Link>
      <Link href="contact">
        <li>Contact</li>
      </Link>
      {data.data && (
        <Link href="server">
          <li>Server</li>
        </Link>
      )}
      <Link href="dashboard">
        <li>Dashboard</li>
      </Link>

      <Link href="signin">
        <li>Sign-In</li>
      </Link>
      <li>
        <button onClick={buttonHandler}>
          {data.status === "authenticated" ? "Logout" : "Login"}
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
