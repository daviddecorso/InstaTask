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

function CalendarView(props) {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.events}
        startAccessor="DTSTART"
        endAccessor="DTEND"
        titleAccessor="SUMMARY"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default CalendarView;
