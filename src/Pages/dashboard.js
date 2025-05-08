import { Topbar } from "../commons/Topbar";
import { Sidebar } from "../commons/Sidebar";
import { Card } from "../commons/Card";
import { Table } from "../commons/Table";
import card1 from "../assets/Icons/card1.png";
import card2 from "../assets/Icons/card2.png";
import card3 from "../assets/Icons/card3.png";
import card4 from "../assets/Icons/card4.png";
import { Pagination } from "../commons/Pagination";


export const Dashboard = () => {
  const getButtonStyle = (state) => {
    switch (state) {
      case "Active":
        return "bg-green-100 text-green-500 px-4 py-2 rounded-full";
      case "Inactive":
        return "bg-gray-100 text-gray-500 px-4 py-2 rounded-full";
      case "Pending":
        return "bg-yellow-100 text-yellow-500 px-4 py-2 rounded-full";
      case "Blacklisted":
        return "bg-red-100 text-red-500 px-4 py-2 rounded-full";
      default:
        return "bg-blue text-white px-4 py-2 rounded-full";
    }
  };
  const columnHeaders = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONENUMBER",
    "DATEJOINED",
    "STATUS",
    

  

  ];
  const tableData = [


    {
      organization: "Lendsqr",
      username: "Adedamola",
      email: "user1@example.com",
      phonenumber: "080123456789",
      datejoined: "May 15, 2020 10:00AM",
      status: 
      <button className={`${getButtonStyle("Blacklisted")} px-4 py-2 rounded-full`}>
      Blacklisted
      </button>
    
  
    },


    {
      organization: "Org 2",
      username: "user2",
      email: "user2@example.com",
      phonenumber: "+987654321",
      datejoined: "May 15, 2020 10:00AM",
      status: 
      <button className={`${getButtonStyle("Active")} px-4 py-2 rounded-full`}>
        Active
      </button>

    },

    {
      organization: "Org 2",
      username: "user2",
      email: "user2@example.com",
      phonenumber: "+987654321",
      datejoined: "May 15, 2020 10:00AM",
      status: 
      <button className={`${getButtonStyle("Inactive")} px-4 py-2 rounded-full`}>
        Inactive
      </button>
      
    },

    {
      organization: "Org 2",
      username: "user2",
      email: "user2@example.com",
      phonenumber: "+987654321",
      datejoined: "May 15, 2020 10:00AM",
      status: 
      <button className={`${getButtonStyle("Pending")} px-4 py-2 rounded-full`}>
       Pending
      </button>
    
    },

    {
      organization: "Org 2",
      username: "user2",
      email: "user2@example.com",
      phonenumber: "+987654321",
      datejoined: "May 15, 2020 10:00AM",
      status: 
      <button className={`${getButtonStyle("Active")} px-4 py-2 rounded-full`}>
        Active
      </button>
      
    },

    {
      organization: "Org 2",
      username: "user2",
      email: "user2@example.com",
      phonenumber: "+987654321",
      datejoined: "May 15, 2020 10:00AM",
      status: 
      <button className={`${getButtonStyle("Blacklisted")} px-4 py-2 rounded-full`}>
        Blacklisted
      </button>
  
    }
  
  
  ];
const DashboardCards = () =>{
  const cards = [
    { img: card1, user: "USERS", h1: "2,453" },
    { img: card2, user: "ACTIVE USERS", h1: "2,453" },
    { img: card3, user: "USERS WITH LOANS", h1: "12,453" },
    { img: card4, user: "USERS WITH SAVINGS", h1: "102,453" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
      {cards.map((card, index) => (
        <Card key={index} img={card.img} user={card.user} h1={card.h1} />
      ))}
    </div>
  );
};

  return (
    <div className="w-full h-screen flex flex-col">
      
      <div className="w-full">
        <Topbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-secondary-400 overflow-y-auto mx-auto p-4 sm:px-10 lg:px-20">
          
          <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-textcolor2 mt-6">
            Users
          </h1>
          <div >
           <DashboardCards/>
          </div>
          <Table columns={columnHeaders} data={tableData} 
          className="mt-[40px] rounded-md shadow"
          tableClassName=""
          theadClassName=""
          tbodyClassName="text-sm text-textcolor1"
          thClassName="text-textcolor1"
          tdClassName=""
          />
          <Pagination />
        </div>
        
      </div>
      
    </div>
  );
};
