import Data from "../data/infoData";

const UserInfo = () => {
  return (
    <div>
      {Data.map((item) => (
        <div className="flex gap-5 items-center px-4 py-3">
          <div className="flex gap-3 w-[10vw] items-start">
            <img src={item.icon} alt="icons" width={23} />
            <div className="text-[#30323D] font-medium text-sm opacity-90">
              {item.title}:
            </div>
          </div>
          <div className="text-sm text-[#565659] font-normal opacity-80">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
