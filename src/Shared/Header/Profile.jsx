import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex border-[1px] p-2 bg-white hover:shadow-md transition rounded-3xl gap-2">
        <Link onClick={() => setisOpen(!isOpen)}>
          <VscAccount className="w-6 h-6" />
        </Link>
        <Link onClick={() => setisOpen(!isOpen)}>
          <IoMenu className="w-6 h-6" />
        </Link>
      </div>
      {isOpen && (
        <div className="absolute text-zinc-700 bg-white right-0 gap-4 w-32 rounded-lg py-3">
          <Link>
            <p className="py-1 hover:bg-zinc-200 pl-4">Profile</p>
          </Link>
          <Link>
            <p className="py-1 hover:bg-zinc-200 pl-4">Logout</p>
          </Link>
          <Link>
            <p className="py-1 hover:bg-zinc-200 pl-4">Login</p>
          </Link>
          <Link>
            <p className="py-1 hover:bg-zinc-200 pl-4">Signup</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
