import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Tabs from "./Tabs";
import TaskCard from "./TaskCard";
import CalendarView from "./CalendarView";
import AddTask from "./addTask";
import { IconFilter } from "@tabler/icons";

function TaskView({ events, setEvents, user }) {
  // Determines if the view is mobile
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // State that tracks which mobile view is selected
  const [activeTab, setTab] = useState("todo");

  // States that control which component should be rendered on mobile (todo view is default)
  const [todoView, setTodoView] = useState(true);
  const [calView, setCalView] = useState(!isMobile);

  // Tracks if zoom events should be filtered from task view
  const [zoomFilter, setZoomFilter] = useState(true);

  const [calEvents, setCalEvents] = useState(events);

  const cardContainerHeight = isMobile ? window.innerHeight - 280 : "700px";

  const cardContainerStyle = {
    height: cardContainerHeight,
    overflow: "auto",
  };

  // This function renders the proper components when the screen is resized.
  window.onresize = function () {
    if (isMobile) {
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
      {isMobile && (
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
              {events.map((event) => (
                <TaskCard
                  event={event}
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
                  <AddTask user={user} />
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
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskView;
