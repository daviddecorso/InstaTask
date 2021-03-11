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

function CalendarView({ events }) {
  let newEventsArray = [];
  for (let d in events) {
    let eventObj = {
      dtstart: new Date(events[d].dtstart),
      dtend: new Date(events[d].dtend),
      summary: events[d].summary,
    };
    newEventsArray.push(eventObj);
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={newEventsArray}
        startAccessor="dtstart"
        endAccessor="dtend"
        titleAccessor="summary"
        style={{ height: 700, maxWidth: window.innerWidth / 2 }}
      />
    </div>
  );
}

export default CalendarView;
