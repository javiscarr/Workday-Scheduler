# Third-Party APIs Workday-Scheduler

## Description
   - This is a simple day planner application which loops through the business working hours of 9AM - 5PM. The application will display the current day and time when the application was opened. The data that is input by the user will be saved to the localStorage of the browser. Once the hour has passed the current time, past hours will be highlighted gray, the current hour red, and future hours green.


## User Story

- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively



## Acceptance Criteria

- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours
- WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock
- THEN I can enter an event
- WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

## Usage
This workday scheduler is used to  display work hours from 9AM - 5PM.
The current day, date and time is displayed in the header.
Each of the time blocks are color coded to establish whether it is in the past(gray), present(red), or future(green).
There is also an input area for each time block and save button where users are able to store information to their schedule.
Once the information is saved, it is then stored to the user's local storage.


## Mock-Up

https://floomby.io/v/021221/Uk76WjPa.mp4?download=1
