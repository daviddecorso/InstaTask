import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CalendarView({ events, calEvents, setCalEvents }) {
  let filterEventsArray = [];
  const [calZoomFilter, setCalZoomFilter] = useState(true);

  function setFilterEventsArray() {
    setCalZoomFilter(!calZoomFilter);
    setEventsArray();
  }

  function setEventsArray() {
    for (let d in events) {
      if (!(calZoomFilter && events[d].isZoom)) {
        let eventObj = {
          dtstart: new Date(events[d].dtstart),
          dtend: new Date(events[d].dtend),
          summary: events[d].summary,
        };
        filterEventsArray.push(eventObj);
      }
    }
    setCalEvents(filterEventsArray);
  }
  useEffect(() => {
    setEventsArray();
  }, []);

  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={calEvents.length <= 0 ? events : calEvents}
          startAccessor="dtstart"
          endAccessor="dtend"
          titleAccessor="summary"
          style={{ height: 700, width: window.innerWidth / 2 }}
        />
      </div>
      <div className="level">
        <button
          className="button is-white"
          onClick={() => {
            setFilterEventsArray();
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
    </>
  );
}

export default CalendarView;
