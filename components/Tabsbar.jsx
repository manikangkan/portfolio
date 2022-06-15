import Image from "next/image";
import { items } from "./Explorer";
import Tab from "./Tab";

const rightItems = [
  {
    label: "play",
    icon: "/icons/play.svg",
  },
  {
    label: "compare changes",
    icon: "/icons/compare-changes.svg",
  },
  {
    label: "split horizontal",
    icon: "/icons/split-horizontal.svg",
  },
  {
    label: "more horizontal",
    icon: "/icons/more-horizontal.svg",
  },
];

const Tabsbar = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-between">
      <div className="flex items-center">
        {items.map((item) => (
          <Tab item={item} key={item.name} />
        ))}
      </div>
      <div className="flex items-center space-x-2 mx-4">
        {rightItems.map((item) => (
          <div className="icon-btn" key={item.label}>
            <Image src={item.icon} alt="bell icon" height={16} width={16} className="invert mt-1"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabsbar;
