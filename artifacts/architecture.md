# Program Organization
**System context diagram:**
![Context diagram](https://cdn.discordapp.com/attachments/800004461979893785/810259108728012800/Context_diagram.jpg)

Our system context diagram shows the relationship between the InstaTask user, the web app, and the backend within our system.

**Container Diagram:**

![Container Diagram](https://media.discordapp.net/attachments/800004461979893785/810688334879522816/Container_Diagram.png?width=729&height=683)

Our container diagram shows the way that all of InstaTask’s different applications interact with services and feed data to our database.

**Component Diagram:**
![Component Diagram](https://cdn.discordapp.com/attachments/800004461979893785/810688208216129536/UML_Component_Diagram_1.jpg)

Our component diagram breaks down the individual components of our web app and displays their interaction with both the backend server and database. The web app allows users to upload their calendar link to the backend server, which will upload to the database. The backend server will use this link to refresh calendar events automatically, and then send these updates to the frontend web app. 

| Component                 | User Story ID                                         |
|---------------------------|-------------------------------------------------------|
| Front-End Web Application | 001, 002, 003, 005, 006, 007, 008, 009, 010, 011, 012 |
| Mobile App                | 001, 002, 003, 005, 006, 007, 008, 009, 010, 011, 012 |
| Backend Server            | 003, 004, 005, 006, 007, 009, 010, 011                |
| Database                  | 003, 004, 005, 006, 007, 009, 010, 011                |
| React Components          |                                                       |
| Login                     | 009                                                   |
| Task View                 | 001, 002, 005, 006, 007, 011, 012                     |
| Import                    | 003                                                   |
| Nav                       | 001, 002, 005                                         |
| Tabs                      | 001, 002, 005                                         |

# Data / Code Design
![Class Diagram](https://cdn.discordapp.com/attachments/544299293021044773/811013706792173598/unknown.png)

This diagram is more of a general guideline for our project rather than a strict rule. We plan on further deliberating on this in the future. We are quite certain that we will have a ‘User’ object, which will contain some data about the user as well as their ‘Calendar’ object, which is what will contain all of their tasks (another object). Tasks contain a number of variables such as start date/time, description, location, etc.

| Class    | User Story ID                     |
|----------|-----------------------------------|
| User     | 003, 009, 010                     |
| Calendar | 001, 003, 004, 005, 006, 007, 008 |
| Task     | 002, 010 , 011 ,012               |

# Business Rules

The primary business rules/ethical practices we will follow in this project involve data privacy and protection. We will make sure to adhere to international pieces of data protection legislation.

# User Interface Design

![UI Diagram](https://media.discordapp.net/attachments/800004461979893785/813261845396848680/UI_mockup.png?width=739&height=683)

Our UI diagram shows the relationship between all of the pages comprising the entire application.

**Login page**

The InstaTask sign in with Google page handles registration and login through Google’s API.

**Import calendar page**

If the person on the sign in page isn’t a user yet or hasn’t imported their calendar to the server, they will be prompted to do so on the import calendar page.

**Home page**

If the person on the sign in page is a returning user that has already imported their calendar to the server, they will be sent to the InstaTask homepage which has a calendar and itinerary view of their tasks.
![Home page](https://cdn.discordapp.com/attachments/800004461979893785/810235562271047770/unknown.png)

On the home page, the user will be able to click the add button which will prompt them with an add task card where they can detail and label their soon to be added task.

The user will also have access to a settings page where they can change their default preferences for notifications.

| UI Screen       | User Story ID                |
|-----------------|------------------------------|
| Login           | 009                          |
| Import Calendar | 003, 004                     |
| Home            | 001, 002, 005, 007, 011, 012 |
| Add Task        | 006                          |
| Settings        | 010                          |

You should have one or more user interface screens in this section. Each screen should be accompanied by an explanation of the screen's purpose and how the user will interact with it. You should relate each screen to one another as the user transitions through the states of your application. You should also have a table that relates each window or component to the support using stories.

# Resource Management

The resources needed to host this service are linearly correlated with the number of users. Considerations for expansion would only need to be considered if our userbase grew beyond that of just developer testing. We would likely just need to purchase a larger hosting package from MongoDB.

# Security

We are going to use Google and oauth 2.0 for user login and authentication, thereby removing the need for us to store user login and password data in a database. We will instead be associating an anonymous user ID with a user’s calendar data for retrieval purposes. Since we won’t be storing any sensitive information in our database, security is not a major concern with this project.

# Performance

Our system will not be performing any tasks that would be considered performance heavy.

# Scalability

For this project, we will be hosting the server backend of our app on a cloud service (likely AWS) and the database will be hosted in the cloud via MongoDB Atlas. Therefore, we will be able to easily scale to the number of users who want to use our app.

# Interoperability

We will not be sharing any data from our app to other services. However, we will be relying on two services for our app, which are Google for authentication and Canvas for providing the calendar data. 

# Internationalization/Localization

Since we are interacting with dates and times we will need a localization system to make sure the date information is accurate to the user’s time zone and preferred date format. We are using a library called date-fns to handle date localization. We don’t have very much text in our app (apart from user-created data) and the text is in Unicode so translation will be available for users who need it.

# Input/Output

We will be using MERN stack for I/O. Through our frontend Javascript app, users will be able to upload their Canvas calendar and create/modify events. These data changes are uploaded to our database through the backend server (MongoDB and Express). Calendar data is also sent to the app from the backend for output. 

# Error Processing

The only time we receive input from the user that needs validation for functional purposes is when the user provides us their .ics calendar link. We will have to verify that it leads to a proper .ics file, which we will do when we process it on the backend before storing valid links in the database. If the .ics file can’t be loaded because the link is invalid we will send an error message to the user. We will also make sure that when we take user input when a user adds tasks that the input is valid on the frontend and won’t cause harm to the system when we store it in the database.

# Fault Tolerance

We will validate the input we receive before entering the backend or database so it can’t cause fault in the system.

# Architectural Feasibility

Our purposes are well within the limitations of the libraries which we rely on. The React library provides all of the functionality we need for our web app, and MongoDB is well-suited to handle our data.

# Overengineering

Our system is simple by design, and we take advantage of functional programming practices to keep both the frontend web app and backend server lightweight and fast. This app attempts to solve a simple problem (lack of notification/organization from Canvas calendar) with a simple solution.

# Build-vs-Buy Decisions

Node.js: JavaScript runtime environment
React: Frontend rendering
Express: Backend server framework 
Passport: User login/authentication
MongoDB: Data storage
Bulma CSS: CSS framework for UI design
Node ical: Parsing and processing ical data
Date-fns: Date localization utility

# Reuse

Other than the libraries and frameworks listed above, the entirety of our code is original, and nothing will be reused from past projects. 

# Change Strategy

We have attempted to build both our frontend web app and backend server in a way that will allow for future expansion without issues. 
