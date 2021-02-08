/* Disabling a linter warning that will be irrelevant
    when a proper href value is provdided. */
/* eslint-disable jsx-a11y/anchor-is-valid */

const Tabs = () => {
  return (
    <div>
      <div className="tabs is-fullwidth is-medium">
        <ul>
          <li className="is-active">
            <a>To-Do</a>
          </li>
          <li>
            <a href="">Calendar</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
