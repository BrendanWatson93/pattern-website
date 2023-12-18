const user = () => {
  return (
    <div>
      <div>
        <h1 className="Heading1 line_break colour_gradient">
          WELCOME BACK /name/
        </h1>
      </div>

      <div className="">
        <div className="text-center line_break">
          <button className="text button1 text-xl">YOUR PRODUCTS</button>
          <button className="button1 text-lg">SAVED BLOG POSTS</button>
          <button className="button1 text-lg">STARRED</button>
          <button className="text-lg button1">Update personal info</button>
        </div>
      </div>

      <div className="">
        {/*DISPLAY TEXT BASED ON WHAT IS PRESSED eg "products you have bought. these can be downloaded from here.*/}
        </div>
    </div>
  );
};

export default user;
