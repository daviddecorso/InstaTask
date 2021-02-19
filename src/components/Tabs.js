/* Disabling a linter warning that is caused by the CSS
 * framework and can't be fixed without undue effort. */
/* eslint-disable jsx-a11y/anchor-is-valid */

const Tabs = ({ activeTab, setTab, setTodoView, setCalView }) => {
  // Changes to the todo view if todo tab is clicked
  const onClickTodoTab = () => {
    setTodoView(true);
    setCalView(false);
    setTab("todo");
  };

  // Changes to the calendar view if the calendar tab is clicked
  const onClickCalTab = () => {
    setCalView(true);
    setTodoView(false);
    setTab("cal");
  };

  return (
    <div>
      <div className="tabs is-fullwidth is-medium">
        <ul>
          {activeTab === "todo" && (
            <li className="is-active">
              <a onClick={onClickTodoTab}>To-Do</a>
            </li>
          )}
          {activeTab === "cal" && (
            <li>
              <a onClick={onClickTodoTab}>To-Do</a>
            </li>
          )}
          {activeTab === "todo" && (
            <li>
              <a onClick={onClickCalTab}>Calendar</a>
            </li>
          )}
          {activeTab === "cal" && (
            <li className="is-active">
              <a onClick={onClickCalTab}>Calendar</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
