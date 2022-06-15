import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Tabsbar from "./Tabsbar";
import Bottombar from "../components/Bottombar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden hidden xl:flex flex-col justify-between">
      <Titlebar />
      <section className="flex-1 flex justify-between">
        <Sidebar />
        <Explorer />
        <section className="flex-1">
          <Tabsbar />
          <main className="bg-gray-800 h-full">{children}</main>
        </section>
      </section>
      <Bottombar />
    </div>
  );
};

export default Layout;
