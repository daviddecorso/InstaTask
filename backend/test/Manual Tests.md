Each consists of step number, steps to reproduce, and expected behavior.

**Task Test**
1.          Click the expand task arrow                                     The task card should expand with details
2.          Click the collapse task arrow                                   The task card should collapse details

**Calendar Test**

1.          Click the back calendar button                                  The calendar should go to the previous month
2.          Click the next calendar button                                  The calendar should go to the current month
3.          Click the week button                                           The calendar should go to a weekly view
4.          Click the day button                                            The calendar should go to today's daily view

**Calendar Test 2**

1.          Click today's date on the calendar                              The calendar should go to today's daily view
2.          Click tomorrow's date on the calendar                           The calendar should go to tomorrow's daily view

**Import Test**

1.          Open a browser and enter the /import URL                        The import page will display
2.          Click the text box                                              Text can be entered
3.          Type a string not containing ".ics" into the text box on        The text should show up in the box 
            the import page
4.          Click the submit button                                         The screen should alert that your link is invalid

**Login Test**

1.          Open a browser and enter the /login URL                         The login page should display
2.          Click the sign in with Google button                            Google's login screen should display
3.          Log in throguh Google authentication                            The home page should display
