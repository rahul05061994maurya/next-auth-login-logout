"use client";
import { signOut } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";
const Button = function ({ children }: { children: string }) {
  const router = useRouter();

  const signoutHandler = async function () {
    // signOut({ callbackUrl: "/signin" });
    //With this way of logout the user will be logout and the page will be refresed
    // use the below method to avoid reloading which will give nice UX
    const data = await signOut({ callbackUrl: "/signin", redirect: false });
    router.replace(data.url);
    router.refresh();
    // always use this method to signout
  };

  return (
    <button className="bg-green-700 p-2 rounded" onClick={signoutHandler}>
      {children}
    </button>
  );
};
export default Button;
