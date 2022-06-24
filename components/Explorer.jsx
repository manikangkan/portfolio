import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const items = [
  {
    name: "home.jsx",
    path: "/",
    icon: "/react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "/html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "/css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "/js_icon.svg",
  },
  {
    name: "uiux.json",
    path: "/uiux",
    icon: "/json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "/markdown_icon.svg",
  },
  {
    name: "settings.md",
    path: "/settings",
    icon: "/markdown_icon.svg",
  },
];

const Explorer = () => {
  const router = useRouter();

  return (
    <nav className="hidden xl:block bg-gray-900 w-1/6">
      <div className="p-4 flex items-center justify-between">
        <div className="space-x-2 flex items-center">
          <Image
            src="/icons/clear-all.svg"
            width={16}
            height={16}
            alt="arrow"
            className="invert"
          />
          <h2 className="text-slate-100 font-medium">Explorer</h2>
        </div>
        <div className="icon-btn">
          <Image
            src="/icons/more-horizontal.svg"
            width={16}
            height={16}
            alt="arrow"
            className="invert"
          />
        </div>
      </div>
      <section>
        {items.map((item) => (
          <Link href={item.path} key={item.name}>
            <div
              className={`flex items-end space-x-1 px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                router.pathname === item.path && "bg-gray-700"
              }`}>
              <Image src={item.icon} width={16} height={16} alt="file icon" />
              <p className="text-slate-400 text-sm">{item.name}</p>
            </div>
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default Explorer;
