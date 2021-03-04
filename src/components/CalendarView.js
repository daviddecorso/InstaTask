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
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="dtstart"
        endAccessor="dtend"
        titleAccessor="summary"
        style={{ height: 700 }}
      />
    </div>
  );
}

export default CalendarView;
