import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { IconFilter } from "@tabler/icons";

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
            <IconFilter color="black" size={28} stroke={1.25} />
          </span>
        </button>
      </div>
    </>
  );
}

export default CalendarView;
