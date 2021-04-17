import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Tabs from "./Tabs";
import TaskCard from "./TaskCard";
import CalendarView from "./CalendarView";
import AddTask from "./addTask";
import { IconFilter, IconBellRinging } from "@tabler/icons";

function TaskView({ events, setEvents, user }) {
  // Determines if the view is mobile
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // State that tracks which mobile view is selected
  const [activeTab, setTab] = useState("todo");

  // States that control which component should be rendered on mobile (todo view is default)
  const [todoView, setTodoView] = useState(true);
  const [calView, setCalView] = useState(!isTabletOrMobile);

  // Tracks if zoom events should be filtered from task view
  const [zoomFilter, setZoomFilter] = useState(true);

  const [calEvents, setCalEvents] = useState(events);

  const cardContainerHeight = isTabletOrMobile
    ? window.innerHeight - 280
    : "700px";

  function compareDates(a, b) {
    // Compares event dates
    const dateA = a.dtstart;
    const dateB = b.dtstart;

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison;
  }

  setEvents(events.sort(compareDates));

  const cardContainerStyle = {
    height: cardContainerHeight,
    overflow: "auto",
  };

  const demoNotificationStyle = {
    position: "absolute",
    right: "5px",
    bottom: "10px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#1659b1",
    border: "none",
    active: "none",
    outline: "none",
  };

  async function sendDemoNotification() {
    const reg = await navigator.serviceWorker.getRegistration();
    reg.showNotification("Test Push Notification", {
      body: "Test notif!",
      data: { url: window.location.href },
    });
  }

  // This function renders the proper components when the screen is resized.
  window.onresize = function () {
    if (isTabletOrMobile) {
      if (activeTab === "todo") {
        setTodoView(true);
        setCalView(false);
      } else if (activeTab === "cal") {
        setCalView(true);
        setTodoView(false);
      }
    } else {
      setCalView(true);
      setTodoView(true);
    }
  };

  return (
    <div>
      {isTabletOrMobile && (
        <Tabs
          activeTab={activeTab}
          setTab={setTab}
          setTodoView={setTodoView}
          setCalView={setCalView}
        />
      )}
      <div className="container">
        <br />
      </div>
      <div id="column" className="columns">
        {todoView && (
          <div id="column" className="column">
            <div className="level">
              <button
                className="button is-white"
                onClick={() => {
                  setZoomFilter(!zoomFilter);
                }}
              >
                <span>Filter</span>
                <span className="icon is-small">
                  <IconFilter color="black" size={28} stroke={1.25} />
                </span>
              </button>
            </div>
            <div style={cardContainerStyle}>
              {/* Displays a list of tasks */}
              {events.map((event, index) => (
                <TaskCard
                  event={event}
                  events={events}
                  setEvents={setEvents}
                  index={index}
                  zoomFilter={zoomFilter}
                  user={user}
                  key={event._id}
                />
              ))}
            </div>
            <div
              className="section"
              style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
            >
              <div className="level">
                <div className="level-item">
                  <AddTask
                    user={user}
                    events={events}
                    setEvents={setEvents}
                    compareDates={compareDates}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {calView && (
          <div id="column" className="column">
            <CalendarView
              events={events}
              calEvents={calEvents}
              setCalEvents={setCalEvents}
              isMobile={isTabletOrMobile}
            />
          </div>
        )}
      </div>
      <button style={demoNotificationStyle} onClick={sendDemoNotification}>
        <IconBellRinging color="white" size={100} stroke={1.25} />
      </button>
    </div>
  );
}

export default TaskView;
