import React from "react";
import Avatar from "../project/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TimelapseIcon from "@mui/icons-material/Timelapse";
const Activity = ({ active }) => {
  const UsFormatter = new Intl.DateTimeFormat("en-US");
  return (
    <div className="card m-3 p-2">
      {active.startTime === undefined ? (
        <></>
      ) : (
        <>
          <div className="  d-flex d-inline mb-3 ">
            <Avatar pic={active.profile} />
            <span className="align-items-start">
              <b>{active.employee}</b>
              <div>
                <small>
                  <CalendarMonthIcon />
                  {`
            ${active.date}`}
                </small>
              </div>
            </span>
            <span className="align-items-start mx-3">
              <b>[{active.taskName}]</b>
              <div>
                <small>
                  <TimelapseIcon />
                  {` Start:${active.startTime}${
                    active.startTime > 12 ? "AM" : "PM"
                  } || End:${active.endTime} ${
                    active.startTime > 12 ? "AM" : "PM"
                  }
          `}
                </small>
              </div>
            </span>
          </div>
          <div>{active.activeDescription}</div>
        </>
      )}
    </div>
  );
};

export default Activity;
