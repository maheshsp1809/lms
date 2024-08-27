import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <UserButton afterSwitchSessionUrl="/" />
      <p>This is a protected page</p>
    </>
  );
}
