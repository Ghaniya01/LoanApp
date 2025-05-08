import { Topbar } from "../commons/Topbar"
import { Sidebar } from "../commons/Sidebar"
import back from "../assets/Icons/back.png"
import profile from "../assets/Icons/profile.png"
import { useNavigate } from "react-router-dom";


export const UserDetails = () =>{

   const navigate = useNavigate("");
  const goBack = () => {
    navigate("/dashboard");
  };

    return(
<div className="w-full h-screen flex flex-col">
  {/* Topbar */}
  <div className="w-full">
    <Topbar />
  </div>

  {/* Main Content */}
  <div className="flex flex-1 overflow-hidden">
    {/* Sidebar */}
    <Sidebar />

    {/* Content Area */}
    <div className="flex-1 bg-secondary-400 overflow-y-auto mx-auto p-4 sm:px-10 lg:px-20">
      {/* Back to Users */}
      <div className="flex items-center mb-6 mt-14" onClick={goBack}>
        <img src={back} alt="Back Arrow" className="mr-2 w-[30px] h-[30px]"/>
        <span className="text-sm sm:text-m text-textcolor1 cursor-pointer">
          Back to Users
        </span>
      </div>

      {/* User Details & Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">

        <h1 className="text-xl sm:text-2xl font-semibold text-textcolor2">
          User Details
        </h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">

          <button className="px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition">
            BLACKLIST USER
          </button>
          <button className="px-6 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition">
            ACTIVATE USER
          </button>
        </div>
      </div>

      {/* Profile Section Placeholder */}
    
      <div className="bg-white rounded-lg shadow-md pt-6 pr-6 pl-6 mt-12">
  {/* User Profile Section */}
  <div className="flex flex-col md:flex-row justify-between mb-6 gap-6">

    {/* Profile Picture and Name */}
<div className="flex items-center space-x-4">
      <div className="w-[100px] h-[100px] bg-gray-200 rounded-full flex items-center justify-center">
        {/* Placeholder Icon */}
        <span className="text-gray-500 text-2xl"><img src={profile} alt="profile"/></span>
      </div>
      <div className="border-r-2 px-6">
        <h2 className="text-xl font-semibold text-textcolor1">Grace Effiom</h2>
        <p className="text-sm text-textcolor1">LSQFF587g90</p>
      </div>

{/* User's Tier and Bank Details */}
<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6">

      <div className="text-center border-r-2 px-4">
        <p className="text-sm text-gray-500">User's Tier</p>
        <div className="flex items-center justify-center">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-gray-300 text-xl">★</span>
          <span className="text-gray-300 text-xl">★</span>
        </div>
      </div>
      <div className="">
        <p className="text-2xl font-semibold text-textcolor2">₦200,000.00</p>
        <p className="text-xs text-textcolor2">9912345678/Providus Bank</p>
      </div>
 </div>
    </div>
  </div>

  {/* Navigation Tabs */}
  <div className="flex flex-wrap mt-12">

    <button className="flex-1 text-center py-2 text-teal-500 border-b-2 border-teal-500 font-semibold">
      General Details
    </button>
    <button className="flex-1 text-center text-gray-500 hover:text-teal-500">
      Documents
    </button>
    <button className="flex-1 text-center py-2 text-gray-500 hover:text-teal-500">
      Bank Details
    </button>
    <button className="flex-1 text-center py-2 text-gray-500 hover:text-teal-500">
      Loans
    </button>
    <button className="flex-1 text-center py-2 text-gray-500 hover:text-teal-500">
      Savings
    </button>
    <button className="flex-1 text-center py-2 text-gray-500 hover:text-teal-500">
      App and System
    </button>
  </div>
</div>

{/*Buttom section*/}
<div className="bg-white rounded-lg shadow-md mt-12">
  {/* Section Title */}
  <h1 className="text-textcolor2 px-6 py-4 font-semibold border-gray-200">
    Personal Information
  </h1>

  {/* User Information */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-b">

  <div className="px-2 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>
  </div>

  <div className="px-2 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md font-bold text-textcolor1 font-bold mb-6">LSQFF587g90</p>
  </div>
  </div>

    {/*Education and employment */}

  <h1 className="text-textcolor2 px-6 py-4 font-semibold border-gray-200">
  Education and employment
  </h1>
  <div className="flex items-center gap-24 border-b">

    
  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

 
  </div>

    {/*Socials */}

  <h1 className="text-textcolor2 px-6 py-4 font-semibold border-gray-200">
  Socials 
  </h1>
  <div className="flex items-center gap-16 border-b">  
  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>

  <div className="px-6 py-4">
    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md font-bold text-textcolor1 font-bold mb-6">LSQFF587g90</p>

    <h2 className="text-sm text-textcolor1">Grace Effiom</h2>
    <p className="text-md text-textcolor1 font-bold">LSQFF587g90</p>
  </div>
  </div>

</div>






</div>


    </div>
  </div>

 


    
    )
}