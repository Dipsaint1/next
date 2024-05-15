import Card from "@/app/components/card";
import Link from "next/link";

export default function UnreadNotifications() {
  return (
    <Card>
      <div> Unread Notifications </div>
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  )
};
