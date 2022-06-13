const contactItems = [
  {
    social: "website",
    link: "manikangkandas.dev",
    href: "https://manikangkandas.dev",
  },
  {
    social: "email",
    link: "manikangkan.das@outlook.com",
    href: "mailto:manikangkan.das@outlook.com",
  },
  {
    social: "github",
    link: "manikangkandas",
    href: "https://github.com/manikangkandas",
  },
  {
    social: "linkedin",
    link: "manikangkandas",
    href: "https://www.linkedin.com/in/manikangkandas/",
  },
  {
    social: "twitter",
    link: "manikangkandas",
    href: "https://www.twitter.com/manikangkandas",
  },
  {
    social: "instagram",
    link: "manikangkandas",
    href: "https://www.instagram.com/manikangkandas",
  },
  {
    social: "polywork",
    link: "manikangkandas",
    href: "https://www.polywork.com/manikangkandas",
  },
  {
    social: "telegram",
    link: "manikangkandas",
    href: "https://t.me/manikangkandas",
  },
  {
    social: "codepen",
    link: "manikangkandas",
    href: "https://codepen.io/manikangkandas",
  },
  {
    social: "codesandbox",
    link: "manikangkandas",
    href: "https://codesandbox.io/u/manikangkandas",
  },
];

const Contact = () => {
  return (
    <div className="p-4 flex items-start">
      <section className="flex-1">
        <h6 className="text-slate-400 font-mono text-2xl">
          🤙🏻Connect with me via
        </h6>
        <div className="p-8">
          <p className="text-slate-400 font-mono text-xl leading-relaxed">
            <span className="text-yellow-300">.socials</span> &#123;
          </p>
          {contactItems.slice(0, 8).map((item, index) => (
            <p
              className="text-slate-400 font-mono text-xl leading-relaxed"
              key={index}>
              &nbsp;&nbsp;{item.social}:{" "}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-yellow-300">
                {item.link}
              </a>
              ;
            </p>
          ))}
          {contactItems.slice(8, contactItems.length).map((item, index) => (
            <p
              className="text-slate-400 font-mono text-xl leading-relaxed"
              key={index}>
              &nbsp;&nbsp;{item.social}:{" "}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-yellow-300">
                {item.link}
              </a>
              ;
            </p>
          ))}
          <p className="text-slate-400 font-mono text-xl leading-relaxed">
            &#125;
          </p>
        </div>
      </section>
      <section className="flex-1">
        <h6 className="text-slate-400 font-mono text-2xl">
          🥹Send a message to me
        </h6>
        <form className="p-8 flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent outline-none border border-slate-600 focus:border-slate-100 rounded-sm text-slate-400 px-4 py-2"
          />
          <input
            type="text"
            placeholder="Your email"
            className="bg-transparent outline-none border border-slate-600 focus:border-slate-100 rounded-sm text-slate-400 px-4 py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-transparent outline-none border border-slate-600 focus:border-slate-100 rounded-sm text-slate-400 px-4 py-2"
          />
          <textarea
            type="text"
            placeholder="Message"
            rows={6}
            className="bg-transparent outline-none border border-slate-600 focus:border-slate-100 rounded-sm text-slate-400 px-4 py-2 resize-none"
          />
          <button className="px-6 py-2 rounded-sm font-medium bg-yellow-300 text-gray-800">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
