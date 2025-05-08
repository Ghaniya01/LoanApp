import { useState } from "react";
import briefcase from "../assets/Icons/briefcase.png";
import home from "../assets/Icons/home.png";
import users from "../assets/Icons/users.png";
import guarantor from "../assets/Icons/guarantor.png";
import decisions from "../assets/Icons/decisions.png";
import loans from "../assets/Icons/loans.png";
import savings from "../assets/Icons/savings.png";
import whitelist from "../assets/Icons/whitelist.png";
import loanrequest from "../assets/Icons/loanrequest.png";
import karma from "../assets/Icons/karma.png";
import savingsproduct from "../assets/Icons/savingsproduct.png";
import feesandcharges from "../assets/Icons/feesandcharges.png";
import transactions from "../assets/Icons/transactions.png";
import services from "../assets/Icons/services.png";
import serviceamount from "../assets/Icons/serviceamount.png";
import settlement from "../assets/Icons/settlement.png";
import report from "../assets/Icons/report.png";
import fees from "../assets/Icons/fees.png";
import preferences from "../assets/Icons/preferences.png";
import auditlog from "../assets/Icons/auditlog.png";
import dropdown2 from "../assets/Icons/dropdown2.png"
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
