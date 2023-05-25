# Add custom id API integration for Facility Configuration UI Page

## Description

This ticket focuses on integrating apis for the newly created page for adding/saving custom ids.

## Acceptance Criteria

1. On save button click, an API call should be made to update custom_id
2. The loading states should be shown when API call is in progress to show update progress to the user.
3. After a successful/error response from API show approprite message to the user.

## Effort Estimate

6 hours

## Implementation Details

1. In the onClick event handler of save button, make the api call to api - /custom_id/:agentId, with custom_id given by the user in the input filed
2. Ceate loading and error states in the component to show approprite status to the user on the screen
3. On the api call response update success/error states and show the same to user
4. Write integation test cases to test this flow.