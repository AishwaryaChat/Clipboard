# Define API/PUT route for custom_id

## Description

We need to provide a PUT route for Custom ID for Facilities to update the custom IDs of Agents. This route will enable Facilities to modify and save custom IDs for specific Agents.

## Acceptance Criteria

1. A PUT route is defined for the Custom ID API, allowing Facilities to update the custom ID of an Agent.
2. The route accepts a unique identifier (internal id) for an agent in parameters
3. The route accepts new custom_id in request body
4. The api updates the new custom_id for the provided agenId(internal id) in parameters
5. The route should return success or error based on what was updated at the api endpoint.

## Effort Estimate

2 hours

## Implementation Details

1. PUT API:
    - Route: /custom_id/:agentId
    - Parameters: 'agentId'- internal database id for an agent
    - body: {custom_id: newCustomID}, this will be the new custom_id for the provided agentID in parameters
    - method: PUT
2. Retrieve the Agent record using the agentId provided in parameters and update it with provided new custom id in the body.
3. Test the route by making requests to verify that the custom ID is updates correctly for valid Agent identifiers, and appropriate error responses are returned for invalid or missing identifiers.
