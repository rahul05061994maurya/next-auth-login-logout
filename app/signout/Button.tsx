"use client";
import { signOut } from "next-auth/react";
const Button = function ({ children }: { children: string }) {
  return (
    <button
      className="bg-green-700 p-2 rounded"
      onClick={() => {
        signOut({ callbackUrl: "/signin" });
      }}
    >
      {children}
    </button>
  );
};
export default Button;
