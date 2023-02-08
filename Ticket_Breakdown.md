# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1
Create a new column in the Agents table called `custom_id` that will store the new custom ID a Facility saves for their Agent.

#### Acceptance Criteria
- A `custom_id` column exists on the Agents table.
- The `custom_id` column is nullable since some Facilities might choose not to save an ID for their agent.

#### Time/Effort Estimates
1 hour

#### Implementation Details
- Write an ALTER statement to create the `custom_id` column.

### Ticket 2
Update the endpoints for adding and updating Agents to factor in the `custom_id`.

#### Acceptance Criteria
- The API endpoint allows Agents to be created with an optional custom ID.
- The API endpoint allows Agents to be updated with an optional custom ID.
- The custom ID on both endpoints should be optional and both actions should work without specifying a custom ID.

#### Time/Effort Estimates
3 hours

#### Implementation Details
- Update the Create Agent endpoint to accept a `custom_id`.
- Update the Update agent endpoint to accept a `custom_id`.
- Update the SQL queries inserting agents to accept the `custom_id`.
- Update the SQL query updating agents to accept the `custom_id`.
- Update all tests to factor in the presence of an optional `custom_id`.


### Ticket 3
Modify the `getShiftsByFacility` function to return the Agent custom ID as part of the agent meta data.

#### Acceptance Criteria
- The `getShiftsByFacility` function should return both the internal database ID and the custom ID saved by a Facility.

#### Time/Effort Estimates
2-3 hours

#### Implementation Details
- Modify the SQL query that fetches the results to include the `custom_id` as part of the columns it selects.
- Modify tests to factor in the `custom_id`.


### Ticket 4
The `generateReport` should use the `custom_id` if it's present.

#### Acceptance Criteria:
- The `generateReport` function should now use the custom id for each Agent if it's present.
- If the `custom_id` is not present, the function should use the internal database id

#### Time/Effort estimate: 
1 hour 

#### Implementation details:
- Modify the `generateReport` function to check if a custom id is available for each Agent
- If a `custom_id` is available, use that as the id of the Agent. If it is not available, use the internal database id
- Modify tests to factor in the `custom_id`

### Ticket 5
Update the UI for adding/editing Agents to allow Facilities to input custom id Acceptance Criteria:

#### Acceptance Criteria:
- A new field should be added to the UI for adding and editing Agents to allow Facilities to input a custom id for each Agent.
- The custom id input field should be optional.
-  The custom id should be saved to the database when the Agent is saved.

#### Time/Effort estimate: 
3 hours 


#### Implementation details:
- Add a new input field for custom id to the UI for adding/editing Agents.
- Modify the code for sending requests to the API to factor in the `custom_id`.

