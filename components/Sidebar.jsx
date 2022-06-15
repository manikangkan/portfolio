import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const topItems = [
  {
    path: "/",
    icon: "/icons/files.svg",
    label: "Files",
  },
  {
    path: "/search",
    icon: "/icons/search.svg",
    label: "Search",
  },
  {
    path: "/github",
    icon: "/icons/github.svg",
    label: "Github",
  },
  {
    path: "/projects",
    icon: "/icons/scm.svg",
    label: "Projects",
  },

  {
    path: "/uiux",
    icon: "/icons/remote-explorer.svg",
    label: "UI & UX",
  },
];

const bottomItems = [
  {
    path: "/about",
    icon: "/icons/person.svg",
    label: "About",
  },
  {
    path: "/settings",
    icon: "/icons/settings.svg",
    label: "Settings",
  },
];

const Layout = ({ item }) => {
  const router = useRouter();

  return (
    <Link href={item.path} key={item.path}>
      <div
        className={`px-4 pt-3 pb-2 cursor-pointer opacity-40 hover:opacity-100 border border-transparent relative group flex items-center ${
          router.pathname === item.path && "border-l-slate-100 opacity-100"
        }`}>
        <Image
          src={item.icon}
          alt={item.label}
          height={24}
          width={24}
          className="invert"
        />
        <p className="absolute bg-gray-800 text-slate-100 hidden group-hover:block ml-10 py-1 px-2 w-max text-xs rounded-sm z-50">
          {item.label}
        </p>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <aside className="bg-gray-800 flex flex-col justify-between">
      <section className="flex flex-col">
        {topItems.map((item) => (
          <Layout item={item} key={item.label} />
        ))}
      </section>
      <section className="flex flex-col">
        {bottomItems.map((item) => (
          <Layout item={item} key={item.label} />
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
