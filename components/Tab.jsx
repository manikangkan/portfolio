import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Tab = ({ item }) => {
  const router = useRouter();
  return (
    <Link href={item.path} key={item.name}>
      <div
        key={item.name}
        className={`flex items-end space-x-1 px-4 py-2 hover:bg-gray-800 cursor-pointer border border-transparent ${
          router.pathname === item.path && "border-t-yellow-300 bg-gray-800"
        }`}>
        <Image src={item.icon} width={16} height={16} alt="file icon"/>
        <p className="text-slate-400 text-sm">{item.name}</p>
      </div>
    </Link>
  );
};

export default Tab;
