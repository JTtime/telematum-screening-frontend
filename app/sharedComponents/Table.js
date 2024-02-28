import React from "react";

const CustomTable = ({ data, columns, stickyHeader, stickyColumn }) => {
  return (
    <div className="overflow-x-auto mx-auto w-4/5">
      <table className="table-auto divide-y divide-gray-200">
        <thead
          className={`bg-gray-200 ${stickyHeader && "sticky top-0 bg-white"}`}
        >
          <tr>
            {columns.map(({ header }, index) => (
              <th
                key={index}
                className={`${stickyColumn && index === 0 && "sticky left-0 bg-white"} px-4 py-2`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map(({ accessor }, columnIndex) => (
                <td key={columnIndex} className="border px-4 py-2">
                  {columnIndex === 0 ? (
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                      <div>
                        <div>{row[accessor]}</div>
                      </div>
                    </div>
                  ) : (
                    row[accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
