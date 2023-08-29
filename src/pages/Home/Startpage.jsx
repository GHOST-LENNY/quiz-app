// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Startpage = () => {
// const [start, setStart] = useState(false);
// const navigate = useNavigate();

// const handleStart = () => {
//   setStart(true);
// }

  return (
    <div>
      <div className="flex font-medium justify-center">
        Welcome to Rhema&apos;s General Test Question
      </div>
      <p>
        You have 30 seconds for this Test. <br />
        Click on the button below whenever you are ready to begin.
      </p>

      <Link to="/test"> 
       <button className="rounded-xl bg-emerald-500 text-white px-2 py-1">
        START
      </button>
      </Link>
     
    </div>
  );
};

export default Startpage;
