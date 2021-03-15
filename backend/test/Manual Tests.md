**Login Test**
| No. | Steps to Reproduce                      | Expected Behavior                    |
|-----|-----------------------------------------|--------------------------------------|
| 1.  | Open a browser and enter the /login URL | The login page should display        |
| 2.  | Click the sign in with Google button    | Google's login screen should display |
| 3.  | Log in throguh Google authentication    | The home page should display         |

**About Page Test**
| No. | Steps to Reproduce                      | Expected Behavior             |
|-----|-----------------------------------------|-------------------------------|
| 1.  | Open a browser and enter the /login URL | The login page should display |
| 2.  | Click the white about button            | The about page should display |

**Import Test**
| No. | Steps to Reproduce                                    | Expected Behavior                                 |
|-----|-------------------------------------------------------|---------------------------------------------------|
| 1.  | Open a browser and enter the /import URL              | The import page should display                    |
| 2.  | Click on the text box                                 | Text can be entered                               |
| 3.  | Type a string not containing ".ics" into the text box | The text should be displayed in the box           |
| 4.  | Click the submit button                               | The screen should alert that your link is invalid |

**Task Card Test**
| No. | Steps to Reproduce            | Expected Behavior                        |
|-----|-------------------------------|------------------------------------------|
| 1.  | Follow the login steps        | The home page should display             |
| 2.  | Click the expand task arrow   | The task card should expand with details |
| 3.  | Click the collapse task arrow | The task card should collapse details    |

**Calendar Test**
| No. | Steps to Reproduce             | Expected Behavior                            |
|-----|--------------------------------|----------------------------------------------|
| 1.  | Follow the login steps         | The home page should display                 |
| 2.  | Click the back calendar button | The calendar should go to the previous month |
| 3.  | Click the next calendar button | The calendar should go to the current month  |
| 4.  | Click the week button          | The calendar should go to a weekly view      |
| 5.  | Click the day button           | The Calendar should go to today's daily view |

**Calendar Test 2**
| No. | Steps to Reproduce                    | Expected Behavior                               |
|-----|---------------------------------------|-------------------------------------------------|
| 1.  | Follow the login steps                | The home page should display                    |
| 2.  | Click today's date on the calendar    | The calendar should go to today's daily view    |
| 3.  | Click tomorrow's date on the calendar | The calendar should go to tomorrow's daily view |

**Add Task Test**
| No. | Steps to Reproduce                    | Expected Behavior                                              |
|-----|---------------------------------------|----------------------------------------------------------------|
| 1.  | Follow the login steps                | The home page should display                                   |
| 2.  | Click Add Task button                 | A modal with new task fields to fill out will display          |
| 3.  | Fill in the modal fields              | Modal fields should update to reflect changes                  |
| 4.  | Click the submit button               | Successfully added task notification should display            |

**Zoom Filter Test**
| No. | Steps to Reproduce                                      | Expected Behavior                                                       |
|-----|---------------------------------------------------------|-------------------------------------------------------------------------|
| 1.  | Follow the login and import steps                       | The home page should display                                            |
| 2.  | Click the filter button on the left side task view      | All zoom related tasks should disappear from the task view              |
| 3.  | Click the filter button on the right side calendar view | All zoom related calendar tasks should disappear from the calendar view |
