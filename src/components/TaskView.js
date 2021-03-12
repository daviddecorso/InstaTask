import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Tabs from "./Tabs";
import TaskCard from "./TaskCard";
import CalendarView from "./CalendarView";
import AddTask from "./addTask";

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

  const cardContainerHeight = isMobile ? window.innerHeight - 200 : "700px";

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.25"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
              </button>
            </div>
            <div style={cardContainerStyle}>
              {/* Displays a list of tasks */}
              {events.map((event) => (
                <div className="block" key={event.uid}>
                  <TaskCard event={event} zoomFilter={zoomFilter} user={user} />
                </div>
              ))}
              <div
                id="column"
                className="column"
                style={{ marginLeft: 250, marginRight: 250 }}
              >
                <AddTask user={user} />
              </div>
            </div>
          </div>
        )}
        {calView && (
          <div id="column" className="column">
            <CalendarView events={events} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskView;
