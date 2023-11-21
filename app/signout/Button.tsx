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
    router.push(data.url);
    window.history.pushState(null, "", data.url);
    window.addEventListener("popstate", () =>
      window.history.pushState(null, "", data.url)
    );

    // window.onpopstate = (event) => {
    //   if (event.state !== null) {
    //     window.history.pushState(null, "", data.url);
    //     router.replace(data.url);
    //     // window.location.href = "/signin";
    //   }
    // };

    // always use this method to signout
  };
  return (
    <button className="bg-green-700 p-2 rounded" onClick={signoutHandler}>
      {children}
    </button>
  );
};
export default Button;
