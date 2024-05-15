import Card from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div> Archived Notifications </div>
      <Link href='/complex-dashboard/unread'>Unread</Link>
    </Card>
  )
};
