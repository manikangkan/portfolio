import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "timeago.js";

const CreateUpdate = ({ date }) => (
  <div className="flex items-center space-x-2">
    <Image
      src="/icons/clock.svg"
      alt="clock icon"
      height={20}
      width={20}
      className="invert"
    />
    <p className="text-slate-100 text-sm">{format(date)}</p>
  </div>
);

const Projects = ({ repos }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h6 className="text-slate-400 font-mono text-2xl">
          😃Projects I've build so far
        </h6>
        <form className="w-1/2 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for a project ..."
            className="w-full"
          />
          <div className="bg-yellow-300 rounded-sm pt-3 pb-1 px-3 cursor-pointer">
            <Image
              src="/icons/search.svg"
              alt="repo icon"
              type="submit"
              height={20}
              width={20}
            />
          </div>
        </form>
      </div>
      <section className="masonry-3-col py-4">
        {repos?.map((repo) => (
          <a href={repo.html_url} key={repo.id}>
            <div className="break-inside mb-4 bg-gray-900 rounded-md px-6 py-4 space-y-4 border border-transparent hover:border-yellow-300 cursor-pointer">
              <div className="flex items-end space-x-2">
                <Image
                  src="/icons/repo.svg"
                  alt="repo icon"
                  height={20}
                  width={20}
                  className="invert"
                />
                <h2 className="text-slate-100 font-medium">{repo.name}</h2>
                {/* <span className="px-2 py-1 border rounded-full text-slate-400 text-xs">
                {repo.visibility}
              </span> */}
              </div>
              {repo.description ? (
                <p className="text-slate-400 text-sm leading-relaxed">
                  {repo.description}
                </p>
              ) : (
                <p className="text-slate-400 text-sm">
                  Description unavailable
                </p>
              )}
              <div className="flex items-center space-x-4">
                <CreateUpdate date={repo.created_at} />
                <CreateUpdate date={repo.update_at} />
              </div>
              {repo.language && (
                <div className="flex items-center space-x-2">
                  <span
                    className={`h-5 aspect-square inline-block rounded-full ${
                      repo.language === "JavaScript"
                        ? "bg-yellow-300"
                        : "bg-red-500"
                    }`}></span>
                  <p className="text-slate-100 text-sm">{repo.language}</p>
                </div>
              )}
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/manikangkandas/repos");
  const repos = await res.json();

  return {
    props: { repos }, // will be passed to the page component as props
  };
}
