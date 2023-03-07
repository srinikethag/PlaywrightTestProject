Feature: Webapp Login

Scenario: Verify that the user is able to login in web app successfully
Given a web browser is on toggl page
When the user enters valid username
And the user enters valid password
Then user is able to login successfully
