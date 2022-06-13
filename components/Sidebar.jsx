import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const topItems = [
  {
    path: "/",
    icon: "/icons/files.svg",
  },
  {
    path: "/github",
    icon: "/icons/github.svg",
  },
  {
    path: "/",
    icon: "/icons/bell.svg",
  },
  {
    path: "/",
    icon: "/icons/search.svg",
  },
  {
    path: "/",
    icon: "/icons/remote-explorer.svg",
  },
  {
    path: "/",
    icon: "/icons/debug.svg",
  },
  {
    path: "/",
    icon: "/icons/extensions.svg",
  },
];
const bottomItems = [
  {
    path: "/person",
    icon: "/icons/person.svg",
  },
  {
    path: "/settings",
    icon: "/icons/settings.svg",
  },
];

const Sidebar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <aside className="bg-gray-800 flex flex-col justify-between">
      <section className="flex flex-col">
        {topItems.map(({ path, icon }) => (
          <Link href={path} key={path}>
            <div
              className={`px-4 py-2 cursor-pointer opacity-40 hover:opacity-100 border border-transparent ${
                router.pathname === path && "border-l-slate-100 opacity-100"
              }`}>
              <Image
                src={icon}
                alt={path}
                height={24}
                width={24}
                className="invert"
              />
            </div>
          </Link>
        ))}
      </section>
      <section className="flex flex-col">
        {bottomItems.map(({ path, icon }) => (
          <Link href={path} key={path}>
            <div
              className={`px-4 py-2 cursor-pointer opacity-40 hover:opacity-100 border border-transparent ${
                router.pathname === path && "border-l-slate-100 opacity-100"
              }`}>
              <Image
                src={icon}
                alt={path}
                height={24}
                width={24}
                className="invert cursor-pointer"
              />
            </div>
          </Link>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
