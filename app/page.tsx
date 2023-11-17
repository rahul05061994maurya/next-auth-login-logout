import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOption);
  console.log("this is session", { session });
  if (!session) {
    return redirect("/signin");
  }

  return <div>this is home page</div>;
}
