# Update Shift retrival function(getShiftsByFacility)

## Description

The current shift retrival function (getShiftsByFacility) retrives the shifts for that quarter including meta data of Agent assigned to each shift, we need to update this function to also send back newly added custom_id filed in agent meta data so that these id should come up in generated reports.

## Acceptance Criteria

1. The function getShiftsByFacility retrieves shifts data for specified facality ids, alsong with the custom_id in Agent meta data
2. the function should return custom_id in agent metadata
3. Also update the test cases for getShiftsByFacility function

## Effort Estimate

2 hours

## Implementation Details

1. Modify the function getShiftsByFacility by adding custom_id field in the existing db query for agents metadata.
2. Update the response to include custom_id
3. Test the function to ensure it returns expected shifts and associated metadata, including custom_id
