"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const buttonHandler = function () {
    router.push("/signout");
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
      <Link href="dashboard">
        <li>Dashboard</li>
      </Link>
      <Link href="server">
        <li>Server</li>
      </Link>
      <Link href="signin">
        <li>Sign-In</li>
      </Link>
      <li>
        <button onClick={buttonHandler}>Login/Logout</button>
      </li>
    </ul>
  );
};

export default Navbar;
