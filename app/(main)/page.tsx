import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full justify-between gap-5 mb-5 md:flex-row ">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Posts"
          count={100}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <AnalyticsChart />
        <PostsTable title="Latest Posts" limit={5} />
      </div>
    </>
  );
}
