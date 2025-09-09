import React from "react";



export default function Total_student() {
  const tableData = [
    { no: "1.", className: "ষষ্ঠ", boy: 95, girl: 100, total: 195, comment: "" },
    { no: "2.", className: "সপ্তম", boy: 100, girl: 102, total: 202, comment: "" },
    { no: "3.", className: "অষ্টম", boy: 85, girl: 100, total: 185, comment: "" },
    {
      no: "4.", rowSpan: 3, groups: [
        { className: "নবম বিজ্ঞান", boy: 10, girl: 10, total: 20, comment: "" },
        { className: "নবম ব্যবসা শিক্ষা", boy: 35, girl: 30, total: 60, comment: "" },
        { className: "নবম মানবিক", boy: 35, girl: 45, total: 80, comment: "" }
      ]
    },
    {
      no: "5", rowSpan: 4, groups: [
        { className: "দশম বিজ্ঞান", boy: 12, girl: 8, total: 20, comment: "" },
        { className: "দশম ব্যবসা শিক্ষা", boy: 45, girl: 35, total: 70, comment: "" },
        { className: "দশম মানবিক", boy: 50, girl: 35, total: 85, comment: "" },
        { className: "সর্বমোট শিক্ষার্থী", boy: 467, girl: 463, total: 930, comment: "" }
      ]
    }
  ];

  const rowColors = ["bg-blue-50", "bg-green-50", "bg-pink-50", "bg-yellow-50"];
  return (
    <div>
      <div>
        {/* section 1  */}
        <section>
          {/* total student */}
          <div className="flex flex-row items-center justify-center gap-28 mt-primary mb-low">
            <div className="flex-c-center">
              <div className="w-20 h-20 rounded-full bg-primary mb-2"></div>
              <h3 className="text-2xl font-bold">Phone</h3>
              <p className="">+8801-000-000</p>
            </div>
            <div className="flex-c-center">
              <div className="w-20 h-20 rounded-full bg-primary mb-2"></div>
              <h3 className="text-2xl font-bold">Email</h3>
              <p className="">domain@gmail.com</p>
            </div>
            <div className="flex-c-center">
              <div className="w-20 h-20 rounded-full bg-primary mb-2"></div>
              <h3 className="text-2xl font-bold">Location</h3>
              <p className="">bondor narayanganj</p>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section>
          <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible mb-high ">
            <div className="-mx-4 px-4 md:mx-0 md:px-0">
              <table className="border-collapse w-[623px] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto shadow-lg rounded-lg overflow-hidden" cellPadding={7}>
                <thead>
                  <tr className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white">
                    <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">ক্রম</th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">শ্রেণি</th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">ছেলে</th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">মেয়ে</th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">মোট</th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">মন্তব্য</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => {
                    if (row.groups) {
                      return (
                        <React.Fragment key={idx}>
                          {row.groups.map((g, gIdx) => (
                            <tr key={gIdx} className={`${rowColors[gIdx % rowColors.length]} hover:bg-indigo-100 transition`}>
                              {gIdx === 0 && (
                                <td rowSpan={row.rowSpan} className="border border-gray-300 px-4 py-2 text-center align-top font-semibold bg-orange-200">{row.no}</td>
                              )}
                              <td className="border border-gray-300 px-4 py-2 text-[16px]">{g.className}</td>
                              <td className="border border-gray-300 px-4 py-2 font-bold">{g.boy}</td>
                              <td className="border border-gray-300 px-4 py-2 font-bold">{g.girl}</td>
                              <td className="border border-gray-300 px-4 py-2 font-bold bg-yellow-100">{g.total}</td>
                              <td className="border border-gray-300 px-4 py-2">{g.comment || "\u00A0"}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      );
                    }
                    return (
                      <tr key={idx} className={`${rowColors[idx % rowColors.length]} hover:bg-indigo-100 transition`}>
                        <td className="border border-gray-300 px-4 py-2 text-center font-semibold bg-orange-200">{row.no}</td>
                        <td className="border border-gray-300 px-4 py-2 text-[16px]">{row.className}</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">{row.boy}</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">{row.girl}</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold bg-yellow-100">{row.total}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.comment || "\u00A0"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
