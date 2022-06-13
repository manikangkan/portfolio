import { items } from "./Explorer";
import Tab from "./Tab";

const Tabsbar = () => {
  return (
    <div className="bg-gray-900 flex items-center">
      {items.map((item) => (
        <Tab item={item} />
      ))}
    </div>
  );
};

export default Tabsbar;