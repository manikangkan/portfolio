import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Tabsbar from "./Tabsbar";
import Bottombar from "../components/Bottombar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-screen hidden xl:flex flex-col justify-between">
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
      <div className="xl:hidden bg-gray-800 h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-slate-100 text-xl p-4 text-center">
          Hello there, this site is not made mobile responsive yet, please view
          this in desktop😃
        </h1>
        <p className="text-slate-100 text-xs">
          Author -{" "}
          <a href="https://github.com/manikangkandas" className="underline">Manikangkan Das</a>
        </p>
      </div>
    </div>
  );
};

export default Layout;
