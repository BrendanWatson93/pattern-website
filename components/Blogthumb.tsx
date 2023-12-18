

const blogthumb = () => {
  return (
    <div className="flex gap-x-4">

      <div className="Blogimage"></div>
      <div className="basis-1/2">
        <h1 className="Blogheading ">Blog Title</h1>
        <h2 className="Blogsubhead ">Blog Tagline</h2>
        <p className="text">
          {" "}
          First X characters of blog on display as an intro
        </p>
      </div>

    </div>
  );
};

export default blogthumb;
