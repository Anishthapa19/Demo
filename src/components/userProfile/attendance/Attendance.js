const Attendance = () => {
  return (
    <div className="grid grid-cols-3 items-center font-medium px-32 gap-10">
      <div className="flex flex-col items-center gap-1 bg-white rounded-md px-1 py-3">
        <div className="text-[#37B76C]">92%</div>
        <div className="text-[#565659] text-sm font-normal">Attendance</div>
      </div>
      <div className="flex flex-col items-center gap-1 bg-white rounded-md px-1 py-3">
        <div className="text-[#30323D]">12 Days</div>
        <div className="text-[#565659] text-sm font-normal">
          Paid leave remaining
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 bg-white rounded-md px-1 py-3">
        <div className="text-[#EA526F]">2 Days</div>
        <div className="text-[#565659] text-sm font-normal">
          Absent this month
        </div>
      </div>
    </div>
  );
};

export default Attendance;
