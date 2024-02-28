import React from "react";
import CustomTable from "../sharedComponents/NewTable";
import { FiClock } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const TablePage = () => {
  const mockData = [
    {
      patients: {
        image: "placeholder-image-url",
        name: "John Doe",
        phone: "123-456-7890",
      },
      date: {
        icon: "calendar-icon-url",
        date: "2024-03-01",
      },
      time: {
        icon: "clock-icon-url",
        timing: "10:00 AM",
      },
      doctor: {
        icon: "star-icon-url",
        name: "Dr. Smith",
        status: "green",
      },
      injury: "Fever",
      actions: ["cancel", "pending", "done"],
    },
    {
      patients: {
        image: "placeholder-image-url",
        name: "Jane Doe",
        phone: "987-654-3210",
      },
      date: {
        icon: "calendar-icon-url",
        date: "2024-03-02",
      },
      time: {
        icon: "clock-icon-url",
        timing: "11:00 AM",
      },
      doctor: {
        icon: "star-icon-url",
        name: "Dr. Johnson",
        status: "red",
      },
      injury: "Malaria",
      actions: ["cancel", "pending", "done"],
    },
    {
      patients: {
        image: "placeholder-image-url",
        name: "Alice Smith",
        phone: "555-555-5555",
      },
      date: {
        icon: "calendar-icon-url",
        date: "2024-03-03",
      },
      time: {
        icon: "clock-icon-url",
        timing: "02:00 PM",
      },
      doctor: {
        icon: "star-icon-url",
        name: "Dr. Brown",
        status: "green",
      },
      injury: "Cholera",
      actions: ["cancel", "pending", "done"],
    },
    {
      patients: {
        image: "placeholder-image-url",
        name: "Bob Johnson",
        phone: "111-222-3333",
      },
      date: {
        icon: "calendar-icon-url",
        date: "2024-03-04",
      },
      time: {
        icon: "clock-icon-url",
        timing: "09:00 AM",
      },
      doctor: {
        icon: "star-icon-url",
        name: "Dr. White",
        status: "green",
      },
      injury: "Flu",
      actions: ["cancel", "pending", "done"],
    },
    {
      patients: {
        image: "placeholder-image-url",
        name: "Emily Brown",
        phone: "444-444-4444",
      },
      date: {
        icon: "calendar-icon-url",
        date: "2024-03-05",
      },
      time: {
        icon: "clock-icon-url",
        timing: "04:00 PM",
      },
      doctor: {
        icon: "star-icon-url",
        name: "Dr. Black",
        status: "red",
      },
      injury: "Headache",
      actions: ["cancel", "pending", "done"],
    },
  ];

  const columnData = [
    {
      header: "Patients",
      render: (row) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
          <div>
            <div>{row.patients.name}</div>
            <div>{row.patients.phone}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Date",
      render: (row) => (
        <div className="flex items-center">
          <BsCalendar4Week className="w-4 h-10 mr-2" />
          <div>{row.date.date}</div>
        </div>
      ),
    },
    {
      header: "Time",
      render: (row) => (
        <div className="flex items-center">
          <FiClock className="w-4 h-10 mr-2" />
          <div>{row.time.timing}</div>
        </div>
      ),
    },
    {
      header: "Doctor",
      render: (row) => (
        <div className="flex items-center">
          <GiAlliedStar
            className={`text-${row.doctor.status === "green" ? "green" : "red"}-500 w-4 h-10 mr-2`}
          />
          <div>{row.doctor.name}</div>
        </div>
      ),
    },
    {
      header: "Injury",
      render: (row) => (
        <div className="p-2 bg-gray-200 rounded">{row.injury}</div>
      ),
    },
    {
      header: "Actions",
      render: () => (
        <div className="text-center">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <PiDotsThreeOutlineVerticalFill className="w-4 h-10 mr-2" />
          </button>
        </div>
      ),
    },
  ];

  const Compo = ({ name, phone }) => {
    return (
      <>
        <div className="flex flex-col justify-center">
          <div>{name}</div>
          <div>{phone}</div>
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Today's appointment list</h1>
      </div>
      <div className="w-4/5">
        <CustomTable
          stickyColumn
          stickyHeader
          data={mockData}
          columns={columnData}
        />
      </div>
    </div>
  );
};

export default TablePage;
