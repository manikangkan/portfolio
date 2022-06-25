import { useState } from "react";

const items = [
  {
    social: "website",
    link: "manikangkandas.dev",
    href: "https://portfolio-manikangkandas.vercel.app/",
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
    social: "behance",
    link: "manikangkandas",
    href: "https://www.behance.net/asity",
  },
  {
    social: "codepen",
    link: "manikangkandas",
    href: "https://codepen.io/manikangkandas",
  },
];

const Contact = () => {
  const formData = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row items-start">
      <section className="flex-1">
        <h6 className="text-slate-400 font-mono text-2xl">
          🤙🏻Connect with me via
        </h6>
        <div className="p-8">
          <p className="text-slate-400 font-mono text-xl leading-relaxed before:content-[counter(line)]">
            <span className="text-yellow-300">&nbsp;.socials</span> &#123;
          </p>
          {items.map((item, index) => (
            <p
              className="text-slate-400 font-mono text-xl leading-relaxed  before:content-[counter(line)]"
              key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;{item.social}:&nbsp;
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
          <p className="text-slate-400 font-mono text-xl leading-relaxed before:content-[counter(line)]">
            &nbsp;&#125;
          </p>
        </div>
      </section>
      <section className="flex-1 w-full">
        <h6 className="text-slate-400 font-mono text-2xl">
          🥹Send a message to me
        </h6>
        <form className="p-8 flex flex-col space-y-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={handleChange}
          />
          <textarea
            type="text"
            placeholder="Message"
            rows={6}
            className="resize-none"
            name="message"
            onChange={handleChange}
          />
          <button className="btn-fill">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
