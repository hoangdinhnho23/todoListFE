import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Home from "../home/Home";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function CalendarEle() {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());

  const dayClickHandler = (e) => {
    console.log(e);
    const day = e.toString()[8] + e.toString()[9];
    console.log(e.toString()[8] + e.toString()[9]);
    var month = e.toString()[4] + e.toString()[5] + e.toString()[6];
    switch (month) {
      case "Jan":
        month = 1;
        break;
      case "Feb":
        month = 2;
        break;
      case "Mar":
        month = 3;
        break;
      case "Apr":
        month = 4;
        break;
      case "May":
        month = 5;
        break;
      case "Jun":
        month = 6;
        break;
      case "Jul":
        month = 7;
        break;
      case "Aug":
        month = 8;
        break;
      case "Sep":
        month = 9;
        break;
      case "Oct":
        month = 10;
        break;
      case "Nov":
        month = 11;
        break;
      case "Dec":
        month = 12;
        break;
    }
    console.log(month);
    const year =
      e.toString()[11] + e.toString()[12] + e.toString()[13] + e.toString()[14];
    // navigate(`/home/${e}`)
    const data = day + "-" + month + "-" + year;
    console.log(data);
    navigate(`/home/${data}`);
  };
  const [displayHome, setDisplayHome] = useState(false);
  return (
    <div className="containerCal">
      <div className="content">
        <div className="headerCalen">
          <h1>ToDo List Calendar</h1>
        </div>

        <Calendar
          className="calendar"
          onChange={onChange}
          value={value}
          onClickDay={(e) => {
            dayClickHandler(e);
          }}
        />
        {displayHome ? <Home /> : ""}
      </div>
    </div>
  );
}
