import React from "react";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOption);

  if (!session) {
    redirect("/signin");
  }
  if (session) {
    const makeAPicall = "demo";
  }

  return <div>this is dashboard</div>;
};

export default page;
