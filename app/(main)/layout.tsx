import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-screen w-[300px]">
          <Sidebar />
        </div>
        <div className="  w-full p-5 md:max-w-[1140px]">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
