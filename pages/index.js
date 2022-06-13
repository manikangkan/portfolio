import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full grid place-content-center">
      <div className="flex items-start space-x-8">
        <Image
          src="/profile.jpg"
          alt="vs code icon"
          height={100}
          width={100}
          className="rounded-full"
        />
        <section className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-slate-100 font-mono text-4xl">
              Manikangkan Das
            </h1>
            <h6 className="text-slate-400 font-mono text-2xl">
              Full Stack Web Developer & UI/UX Designer
            </h6>
          </div>
          <div className="space-x-4">
            <Link href="/projects">
              <button className="px-6 py-2 rounded-sm font-medium bg-yellow-300 text-gray-800">
                View Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2 rounded-sm font-medium border border-yellow-300 text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
