import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Manikangkan Das is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="manikangkan Das, manikangkan, Das, web developer portfolio, manikangkan web developer, manikangkan developer, mern stack, manikangkan Das portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Manikangkan Das's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <link href="http://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet"/>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Manikangkan Das",
};
