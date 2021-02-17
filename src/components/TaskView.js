import React from "react";
import { useState } from "react";
import Tabs from "./Tabs";
import TaskCard from "./TaskCard";
import CalendarView from "./CalendarView";

function TaskView(props) {
  const [events, setEvents] = useState(testEvents);

  return (
    <div>
      {/* <Tabs /> */}
      <div class="container">
        <br />
      </div>
      <div class="columns">
        <div class="column">
          {/* Displays a list of tasks */}
          {events.map((event) => (
            <div class="block" key={event.UID}>
              <TaskCard event={event} />
            </div>
          ))}
        </div>
        <div class="column">
          <CalendarView events={events} />
        </div>
      </div>
    </div>
  );
}

/* 
TEST DATA:
*/
const testEvent1 = {
  DTSTAMP: "20201113T183400Z",
  UID: "event-assignment-6864826",
  DTSTART: "20210206T000000",
  DTEND: "20210206T000000",
  CLASS: "PUBLIC",
  DESCRIPTION:
    "For the upcoming sprint deadline, please have the following items available on your GitHub site:\n\n* Vision Statement [7 points]\n\n",
  SEQUENCE: 0,
  SUMMARY: "Sprint #1 [COP4331C_CMB-21Spring 00038]",
  URL:
    "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=02&year=2021#assignment_6864826",
};

const testEvent2 = {
  DTSTAMP: "20210110T190300Z",
  UID: "event-assignment-6864815",
  DTSTART: "20210206T000000",
  DTEND: "20210206T000000",
  CLASS: "PUBLIC",
  SEQUENCE: 0,
  SUMMARY: "Weekly Quiz 3 [COP4331C_CMB-21Spring 00038]",
  URL:
    "https://webcourses.ucf.edu/calendar?include_contexts=course_1369388&month=02&year=2021#assignment_6864815",
};

const testEvents = [testEvent1, testEvent2];

export default TaskView;
