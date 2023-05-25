# Define API/GET route for custom_id

## Description

To enable Facilities to retrieve the custom IDs of Agents, we need to define a GET route for the Custom ID API. This route will allow Facilities to fetch the custom ID associated with a specific Agent.

## Acceptance Criteria

1. A GET route is defined for the Custom ID API, allowing Facilities to retrieve the custom ID of an Agent.
2. The route accepts a unique identifier for the Agent (e.g., Agent ID or custom ID) as a parameter.
3. The route returns the custom ID of the specified Agent in the response.
4. Test case for the api

## Effort Estimate

2 hours

## Implementation details

1. get API:
    - Route: /custom_id/:agenId
    - Parameters: 'agentId'- internal databse id for agent
    - method: GET
2. Test the route by making requests to verify that the custom ID is returned correctly for valid Agent identifiers, and appropriate error responses are returned for invalid or missing identifiers.
