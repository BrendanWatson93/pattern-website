import Link from "next/link";


const Footer = () => {
  return (

    <div className=" w-full bottom-0">
      <div className="box-content bg-white  h-30 bg-gradient-to-r from-purple-900 to-blue-900">

      <div className="py-8 flex justify-center space-x-3">
      <Link href="/"><button  className="button1">HOME</button></Link>
      <Link href="/about" ><button className="button1">
              About
            </button> </Link> 
        <button className="button1">FAQs</button>
        <button className="button1">Social Links</button>
      </div>
    
      </div>

    </div>

  );
};

export default Footer;
