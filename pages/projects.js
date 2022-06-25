import Image from "next/image";
import { useState } from "react";
import { format } from "timeago.js";

const CreateUpdate = ({ date }) => (
  <div className="flex items-center space-x-2">
    <Image
      src="/icons/clock.svg"
      alt="clock icon"
      height={16}
      width={16}
      className="invert"
    />
    <p className="text-slate-100 text-xs">{format(date)}</p>
  </div>
);

const Projects = ({ repos }) => {
  const [searchContent, setSearchContent] = useState("");
  const updatedRepos = repos.filter(
    (repo) =>
      repo.name?.toLowerCase().includes(searchContent.toLowerCase()) ||
      repo.description?.toLowerCase().includes(searchContent.toLowerCase()) ||
      repo.language?.toLowerCase().includes(searchContent.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h6 className="text-slate-400 font-mono text-2xl">
          😃Projects I've build so far
        </h6>
        <form
          className="w-full lg:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(searchContent);
          }}>
          <input
            type="text"
            placeholder="🍳 Search for a project ..."
            className="flex-1"
            onChange={(e) => setSearchContent(e.target.value)}
          />
        </form>
      </div>
      <section className="md:masonry-2-col lg:masonry-3-col py-4">
        {updatedRepos.length ? (
          updatedRepos?.map((updatedRepo) => (
            <a href={updatedRepo.html_url} key={updatedRepo.id}>
              <div className="break-inside mb-4 bg-gray-900 rounded-md px-6 py-4 space-y-4 border border-transparent hover:border-yellow-300 cursor-pointer">
                <div className="flex items-end space-x-2">
                  <Image
                    src="/icons/repo.svg"
                    alt="repo icon"
                    height={20}
                    width={20}
                    className="invert"
                  />
                  <h2 className="text-slate-100 font-medium">
                    {updatedRepo.name}
                  </h2>
                  {/* <span className="px-2 py-1 border rounded-full text-slate-400 text-xs">
                {repo.visibility}
              </span> */}
                </div>
                {updatedRepo.description && (
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {updatedRepo.description}
                  </p>
                )}
                <div className="flex items-center space-x-4">
                  <CreateUpdate date={updatedRepo.created_at} />
                  <CreateUpdate date={updatedRepo.updated_at} />
                </div>
                {updatedRepo.language && (
                  <div className="flex items-center space-x-2">
                    <span
                      className={`h-4 aspect-square inline-block rounded-full ${
                        updatedRepo.language === "JavaScript"
                          ? "bg-yellow-300"
                          : "bg-red-500"
                      }`}></span>
                    <p className="text-slate-100 text-xs">
                      {updatedRepo.language}
                    </p>
                  </div>
                )}
              </div>
            </a>
          ))
        ) : (
          <h6 className="text-slate-400 font-mono text-2xl">
            Please try another search...
          </h6>
        )}
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
