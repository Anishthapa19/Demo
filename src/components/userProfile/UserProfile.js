import avatar from "../../assets/profile/Avatar.svg";
import { TbPhoneCall } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";

const UserProfile = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <div>
          <img src={avatar} alt="user profile" />
        </div>
        <div>
          <div className="text-base font-medium">Devin Smith</div>
          <div className="text-[#2BB8D6] text-sm font-normal">
            sharadshakya12@gmail.com
          </div>
          <div className="text-[#9A9A9A] font-normal text-xs">
            Teacher: Microbiology
          </div>
        </div>
      </div>
      <div className="flex gap-4 text-white items-center">
        <button className="flex gap-2 bg-[#37B76C] px-6 py-3 rounded-full">
          <TbPhoneCall fontSize={"22px"} />
          Call
        </button>
        <button className="flex gap-2 bg-[#2BB8D6] text-base px-6 py-3 rounded-full">
          <BiMessageSquareDetail fontSize={"22px"} />
          Message
        </button> 
      </div>
    </div>
  );
};

export default UserProfile;
