import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Tabsbar from "./Tabsbar";
import Bottombar from "../components/Bottombar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Titlebar />
      <section className="flex-1 flex justify-between">
        <Sidebar />
        <Explorer />
        <section className="flex-1 flex flex-col">
          <Tabsbar />
          <main className="bg-gray-800 flex-1">{children}</main>
        </section>
      </section>
      <Bottombar />
    </div>
  );
};

export default Layout;
