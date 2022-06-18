const UIUX = () => {
  return (
    <div className="p-4 h-full">
      <div className="h-full max-h-full flex flex-col items-center justify-center space-y-4">
        <h6 className="text-slate-400 font-mono text-2xl">
          ✏️UI & UX I've designed so far
        </h6>
        <p className="text-slate-400 text-sm leading-relaxed max-w-lg text-center">
          Important Notice The public Behance API is no longer accepting new
          clients. If you are a current API user, you will still be able to edit
          and access the content returned by the API. Anything you have already
          built that uses the API will continue to operate. Visit adobe.io for
          future developments of the Behance API.
        </p>
        <a
          href="https://www.behance.net/asity"
          className="text-slate-100 underline">
          Manikangkan Das on Behance
        </a>
      </div>
    </div>
  );
};

export default UIUX;
