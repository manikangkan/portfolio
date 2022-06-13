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
    name: "articles.json",
    path: "/articles",
    icon: "/json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "/markdown_icon.svg",
  },
];

const Explorer = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-900 w-1/6">
      <p className="p-4 text-slate-100 font-medium">Explorer</p>
      <section>
        {items.map((item) => (
          <Link href={item.path} key={item.name}>
            <div
              className={`flex items-end space-x-1 px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                router.pathname === item.path && "bg-gray-800"
              }`}>
              <Image src={item.icon} width={16} height={16} />
              <p className="text-slate-400 text-sm">{item.name}</p>
            </div>
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default Explorer;
