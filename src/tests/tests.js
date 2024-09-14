// Due to the scope of the tech test and the time available, development was prioritized over writing tests.
// Before releasing this into production, the following tests should be included:

//Test no errors in the console
//Test : 🍍 "todoList" store installed 🆕: Is in the console (pinia sotre initialize)

//Test data at localStorage piniaState:

//if data is undefined
//  Assert app should show No Todos Found
//  Assert No tbody contents
//  Assert No Clear Completed Button
//  Input data, Test the following cases

//if data is present
//  Assert table has same number of rows as present in localstorage
//  AssertAll table rows contain:
//      text = todo.text
//      text has strikethrough if todo.completed
//      icon is appropriate for todo.comleted
//      Edit button and Delete Button

//Test functionality Doctests

//Test new todo
//  Select input form
//  Enter new todo in input
//  click add to list
//  Assert new todo added in table

//Test edit todo
//  Select input form
//  Enter new todo in input
//  Click add to list
//  Assert new todo added in table
//  Click edit button in row
//  Assert edit input form is shown
//  Assert submit button is shown
//  Assert Delete button is disabled
//  Assert Add todo list button and form are disabled
//  Assert form contents match previous todo text
//  Assert no change to dom/store/local storage when field is empty and button is clicked
//  Input new content
//  Click Submit button
//  Assert Submit reverts to edit button
//  Assert all other buttons are enabled
//  Assert td content has been updated
//  Refresh page
//  Assert td still contains updated text

//Test delete todo
//  Select input form
//  Enter new todo in input
//  Click add to list
//  Assert new todo added in table
//  Click delete button
//  Assert entry no longer in table
//  Refresh page
//  Assert entry still not in table

//Test Clear completed
//  Select input form
//  Enter new todo in input ("Todo 1")
//  Click add to list
//  Select input form
//  Enter new todo in input ("Todo 2")
//  Click add to list
//  Select input form
//  Enter new todo in input ("Todo 3")
//  Click add to list
//  Click task2 completed column
//  Assert Task 2 has checkmark (completed)
//  Click Clear Completed Button
//  Verify table only has 2 rows
//  Verify Task 2 not in table
//  Verify checkmark not in dom
//  Verify Task1/Task3 in table still
//  Verify Task 2 not in localstorage
