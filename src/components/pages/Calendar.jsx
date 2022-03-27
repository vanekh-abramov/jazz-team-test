import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routerLinks";
import useCalendar from "../../hooks/useCalendar";
import styles from "../../styles/calendar.module.css";
import '../../styles/calendar.css'
const Calendar = () => {

  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  // console.log(calendarRows[1][1])

  const clickHandler = (e, date, value, tiketValue) => {
    // console.log(e.target, date, value, tiketValue);
    // console.log(calendarRows.cols)
  };

  useEffect(() => {
    if (!isLogin) {
      navigate(LOGIN_ROUTE);
    }
  }, [isLogin, navigate]);

  return (
    <div className={styles.container_inner}>
      <p>
        Selected Month:{" "}
        {`${
          monthNames[selectedDate.getMonth()]
        } - ${selectedDate.getFullYear()}`}
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            {daysShort.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols) => {
            return (
              <tr key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={styles.today}
                      onClick={(e) => clickHandler(e, col.date, col.value, col.tiketValue)}
                    >
                      {col.value}
                      <p>{col.tiketValue}</p>
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={col.classes}
                      onClick={(e) => clickHandler(e, col.date, col.value, col.tiketValue)}
                    >
                      {col.value}
                      <p>{col.tiketValue}</p>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="button" onClick={getPrevMonth}>
        Prev
      </button>
      <button className="button" onClick={getNextMonth}>
        Next
      </button>
    </div>
  );
};

export default Calendar;
