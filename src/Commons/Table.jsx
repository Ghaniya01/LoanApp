import React from "react";
import { FilterModal } from "../commons/Filter";
import { OptionsDropdown } from "./Options";

export const Table = ({
  columns,
  data,
  className,
  tableClassName,
  theadClassName,
  tbodyClassName,
  thClassName,
  
}) => {
 
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className={`min-w-full ${tableClassName}`}>
        <thead className={theadClassName}>
          <tr className="">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`${
                 index === 0 || index === columns.length - 1  ? "px-8 py-4"  : "px-2 py-4"  } text-left font-semibold text-xs ${thClassName}`}>
               <div className="flex items-left mt-4">
                  <span>{column}</span>
                   <FilterModal />
                </div>
              </th>
            ))}
            <th
                className={`${
                 "px-8 py-4 px-2 py-4"  } text-left font-semibold text-xs ${thClassName}`}>
               <div className="flex items-left mt-4">
                  <span>{""}</span>
                </div>
              </th>
          </tr>
        </thead>
        <tbody className={tbodyClassName}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-primary"} border-b`}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`${
                    colIndex === 0 || colIndex === columns.length - 1 ? "px-8 py-4"  : "px-2 py-4"  } text-left font-semi-bold text-md ${thClassName}`}
                >
                  {row[column.toLowerCase()]}
               
                </td>
                
              ))}
                  <td> <OptionsDropdown/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
