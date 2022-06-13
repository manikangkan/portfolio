import Image from "next/image";

const leftItems = [
  {
    label: "main",
    icon: "/icons/compare-changes.svg",
  },
  {
    label: "12",
    icon: "/icons/error.svg",
  },
  {
    label: "3",
    icon: "/icons/warning.svg",
  },
];

const rightItems = [
  {
    label: "Powered by Next.js",
    icon: "/nextjs.svg",
  },
  {
    label: "Prettier",
    icon: "/icons/bell.svg",
  },
];

const Bottombar = () => {
  return (
    <footer className="bg-gray-900 flex items-center justify-between">
      <section className="flex items-center">
        {leftItems.map(({ label, icon }) => (
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-800 px-2 py-1">
            <Image
              src={icon}
              alt="bell icon"
              height={16}
              width={16}
              className="invert"
            />
            <p className="text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </section>
      <section className="flex items-center">
        {rightItems.map(({ label, icon }) => (
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-800 px-2 py-1">
            <Image
              src={icon}
              alt="bell icon"
              height={16}
              width={16}
              className="invert"
            />
            <p className="text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </section>
    </footer>
  );
};

export default Bottombar;
