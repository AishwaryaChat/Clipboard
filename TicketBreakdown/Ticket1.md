# Update Agent Model and Database Schema

## Description

A new field custom_id needs to be added to Agent Model, to store custom ID provided by Facility for each Agent record.

## Acceptance Criteria

1. The Agent model has a new field called "custom_id" to store the custom ID provided by the Facility.
2. The database schema for Agents table needs to be updated to add custom_id field
3. The existing data in the Agents Table should be migrated custom IDs if they are provided

## Effort Estimate

4-5hours

## Implementation Details

1. Modify Agent Model to add new custom_id field
2. Update database schema for Agent's table to include new custom_id field
3. Write a migration script to add custom_id field to existing records
