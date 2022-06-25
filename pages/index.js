import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full grid place-content-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-8 text-center lg:text-start">
        <Image
          src="/profile.jpg"
          alt="vs code icon"
          height={100}
          width={100}
          className="rounded-full"
        />
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-slate-100 font-mono text-4xl">
              Manikangkan Das
            </h1>
            <h6 className="text-slate-400 font-mono text-2xl">
              A computer engineering student from India who
              loves to create for the web 😃
            </h6>
          </div>
          <div className="space-x-4">
            <Link href="/projects">
              <button className="btn-fill">View Work</button>
            </Link>
            <Link href="/contact">
              <button className="btn-outline">Contact Me</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
