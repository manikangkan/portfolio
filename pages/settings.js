import Image from "next/image";
import { useState } from "react";

const items = [
  {
    name: "GitHub Dark",
    publisher: "GitHub",
    description: "GitHub theme for VS Code",
  },
  {
    name: "Dracula",
    publisher: "Dracula Theme",
    description:
      "Official Dracula Theme. A dark theme for many editors, shells, and ,more.",
  },
  {
    name: "Ayu Dark",
    publisher: "teabyii",
    description: "A simple theme with bright colors.",
  },
  {
    name: "Ayu Mirage",
    publisher: "teabyii",
    description: "A simple theme with bright colors.",
  },
  {
    name: "Nord",
    publisher: "arcticicestudio",
    description:
      "An arctic, north-bluish clean and elegant Visual Studio Code theme.",
  },
  {
    name: "Night Owl",
    publisher: "sarah.drasner",
    description: "A VS Code theme for the night owls out there.",
  },
];

const ThemeInfoCard = ({ updatedItem }) => (
  <div className="space-y-4 break-inside mb-4 bg-gray-900 rounded-md border border-transparent hover:border-yellow-300 cursor-pointer p-6">
    <Image
      src="/profile.jpg"
      alt="vs code icon"
      height={50}
      width={50}
      className="rounded-full"
    />
    <div className="my-2">
      <h2 className="text-slate-100 font-medium">{updatedItem.name}</h2>
      <p className="text-slate-400 text-sm leading-relaxed">
        {updatedItem.description}
      </p>
    </div>
    <div className="flex justify-between items-center">
      <p className="text-slate-100 text-xs">
        Published by <span className="text-yellow-300"> {updatedItem.publisher}</span>
      </p>
      <div className="flex items-center space-x-2">
        <span className="h-4 aspect-square inline-block rounded-full bg-yellow-300"></span>
        <p className="text-slate-100 text-xs">Theme active</p>
      </div>
    </div>
  </div>
);
const Settings = () => {
  const [searchContent, setSearchContent] = useState("");
  const updatedItems = items.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchContent.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchContent.toLowerCase()) ||
      item.language?.toLowerCase().includes(searchContent.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h6 className="text-slate-400 font-mono text-2xl">🔥 Manage theme</h6>
        <form
          className="w-full lg:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(searchContent);
          }}>
          <input
            type="text"
            placeholder="🍳 Search for a theme ..."
            className="flex-1"
            onChange={(e) => setSearchContent(e.target.value)}
          />
        </form>
      </div>
      <section className="md:masonry-2-col lg:masonry-3-col py-4">
        {updatedItems.map((updatedItem) => (
          <ThemeInfoCard updatedItem={updatedItem} />
        ))}
      </section>
    </div>
  );
};

export default Settings;
