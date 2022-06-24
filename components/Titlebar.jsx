import Image from "next/image";

const items = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

const Titlebar = () => {
  return (
    <section className="bg-gray-900 px-2 py-2 md:py-0 flex items-center justify-between">
      <div className="flex-1 flex items-center space-x-2">
        <Image
          src="/vscode_icon.svg"
          alt="vs code icon"
          height={16}
          width={16}
        />
        <div className="hidden md:flex items-center">
          {items.map((item) => (
            <p
              key={item}
              className="text-xs text-slate-400 hover:bg-gray-800 p-2 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      </div>
      <p className="hidden sm:block flex-1 text-center text-xs text-slate-400">
        Manikangkan Das - Visual Studio Code
      </p>
      <div className="space-x-2 flex-1 flex items-center justify-end">
        <span className="h-3 aspect-square bg-yellow-500 rounded-full cursor-pointer"></span>
        <span className="h-3 aspect-square bg-green-500 rounded-full cursor-pointer"></span>
        <span className="h-3 aspect-square bg-red-500 rounded-full cursor-pointer"></span>
      </div>
    </section>
  );
};

export default Titlebar;
