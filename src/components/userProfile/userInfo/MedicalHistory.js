import Data from "../data/medicalData";

const MedicalHistory = () => {
  return (
    <div className="px-4">
      {Data.map((item) => (
        <>
          <div className="flex gap-5 items-center py-3">
            <div className="flex gap-3 w-[10vw] items-start">
              <img src={item.icon} alt="icons" width={23} />
              <div className="text-[#30323D] font-medium text-sm opacity-90">
                Issue:
              </div>
            </div>
            <div className="text-sm text-[#565659] font-normal opacity-80">
              {item.issue}
            </div>
          </div>
          <div className="flex gap-5 items-center py-3">
            <div className="flex gap-3 w-[10vw] items-start">
              <img src={item.icon} alt="icons" width={23} />
              <div className="text-[#30323D] font-medium text-sm opacity-90">
                Status:
              </div>
            </div>
            <div
              className={
                item.status === "Active"
                  ? "text-sm text-[red] font-normal opacity-80"
                  : "text-sm text-[#37B76C] font-normal opacity-80"
              }
            >
              {item.status}
            </div>
          </div>
          <div className="flex gap-5 py-3">
            <div className="flex gap-3 w-[10vw] items-start">
              <img src={item.icon} alt="icons" width={23} />
              <div className="text-[#30323D] font-medium text-sm opacity-90 w-[10vw]">
                Description:
              </div>
            </div>
            <div className="text-sm text-[#565659] font-normal opacity-80">
              {item.description}
            </div>
          </div>
          <div className="flex gap-5 py-3">
            <div className="flex gap-3 w-[10vw] items-start">
              <img src={item.icon} alt="icons" width={23} />
              <div className="text-[#30323D] font-medium text-sm opacity-90">
                Prescribed Medicines:
              </div>
            </div>
            <div className="text-sm text-[#565659] font-normal opacity-80">
              {item.medicine}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MedicalHistory;
