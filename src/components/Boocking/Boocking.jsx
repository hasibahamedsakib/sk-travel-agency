import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const data = useLoaderData();
  return (
    <div className="container grid mt-16 gap-2 w-[90%] mx-auto grid-cols-2">
      <div className="text-white flex justify-center items-start flex-col pr-3">
        <h1 className="text-7xl font-semibold">{data.title}</h1>
        <p className="my-3">{data?.description}</p>
      </div>
      <div className="w-[470px]  bg-white text-slate-700 grid items-center justify-center py-10 rounded-md">
        <div className="my-3">
          <label>Origin</label>
          <input
            className="border px-3 py-2 w-96 rounded-md text-xl font-semibold focus:outline-blue-200 block my-2"
            type="text"
            placeholder="your Origin"
          />
        </div>
        <div className="my-3">
          <label>Destination</label>
          <input
            className="border px-3 py-2 w-96 font-semibold text-xl rounded-md focus:outline-blue-200 block my-2"
            type="text"
            placeholder="your destination"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <label htmlFor="">From : </label>
            <DatePicker
              className="border px-3 py-2 w-44 font-semibold  rounded-md focus:outline-blue-200 block my-2 bg-slate-100"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <FaCalendarAlt />
          </div>
          <div>
            <label htmlFor="">To : </label>
            <DatePicker
              className="border px-3 py-2 w-44 font-semibold  rounded-md focus:outline-blue-200 block my-2 bg-slate-100"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <FaCalendarAlt />
          </div>
        </div>
        <button className="btn w-full py-3 mt-5">Start Booking</button>
      </div>
    </div>
  );
};

export default Booking;
