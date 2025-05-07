import { useState } from "react";
import briefcase from "../Assets/Icons/briefcase.png";
import home from "../Assets/Icons/home.png";
import users from "../Assets/Icons/users.png";
import guarantor from "../Assets/Icons/guarantor.png";
import decisions from "../Assets/Icons/decisions.png";
import loans from "../Assets/Icons/loans.png";
import savings from "../Assets/Icons/savings.png";
import whitelist from "../Assets/Icons/whitelist.png";
import loanrequest from "../Assets/Icons/loanrequest.png";
import karma from "../Assets/Icons/karma.png";
import savingsproduct from "../Assets/Icons/savingsproduct.png";
import feesandcharges from "../Assets/Icons/feesandcharges.png";
import transactions from "../Assets/Icons/transactions.png";
import services from "../Assets/Icons/services.png";
import serviceamount from "../Assets/Icons/serviceamount.png";
import settlement from "../Assets/Icons/settlement.png";
import report from "../Assets/Icons/report.png";
import fees from "../Assets/Icons/fees.png";
import preferences from "../Assets/Icons/preferences.png";
import auditlog from "../Assets/Icons/auditlog.png";
import dropdown2 from "../Assets/Icons/dropdown2.png"
const MenuSection = ({ title, items }) => {
  return (
    <ul className="flex flex-col">
      {title && (
        <li className="mt-[20px] flex items-center p-4 text-xs mb-[5px]">
          {title}
        </li>
      )}
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center p-4 hover:bg-blue-100 cursor-pointer"
        >
          <img src={item.icon} alt={item.label} className="w-[16px] h-[14.22px]" />
          <span className="ml-4">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

const DropdownMenu = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      
      <div
        className="flex items-center p-4 hover:bg-blue-100 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img src={briefcase} alt="briefcase" className="w-[16px] h-[14.22px]" />
        <span className="ml-4">{label}</span>
        <img src={dropdown2} alt="dropdown2" className={`ml-auto w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}/>
      </div>

     
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const menuItems = [
    { icon: home, label: "Dashboard" },
  ];

  const customers = [
    { icon: users, label: "Users" },
    { icon: guarantor, label: "Guarantors" },
    { icon: loans, label: "Loans" },
    { icon: decisions, label: "Decisions" },
    { icon: savings, label: "Savings" },
    { icon: loanrequest, label: "Loan Request" },
    { icon: whitelist, label: "Whitelist" },
    { icon: karma, label: "Karma" },
  ];

  const businesses = [
    { icon: briefcase, label: "Briefcase" },
    { icon: loanrequest, label: "Loan Product" },
    { icon: savingsproduct, label: "Savings Products" },
    { icon: feesandcharges, label: "Fees and Charges" },
    { icon: transactions, label: "Transactions" },
    { icon: services, label: "Services" },
    { icon: serviceamount, label: "Service Amount" },
    { icon: settlement, label: "Settlements" },
    { icon: report, label: "Reports" },
  ];

  const settings = [
    { icon: preferences, label: "Preferences" },
    { icon: fees, label: "Fees and Prices" },
    { icon: auditlog, label: "Audit Logs" },
  ];

  return (
    <div className="w-[250px] h-full bg-primary text-textcolor2 overflow-y-auto mt-[30px] ml-[10px]">
      
      <DropdownMenu
        label="Switch Organization"
        options={["Organization 1", "Organization 2", "Organization 3"]}
      />

      
      <MenuSection items={menuItems} />
      <MenuSection title="CUSTOMERS" items={customers} />
      <MenuSection title="BUSINESSES" items={businesses} />
      <MenuSection title="SETTINGS" items={settings} />
    </div>
  );
};
