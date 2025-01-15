#!/bin/bash

# Set path to your project
cd /Users/jonathansilveira/Documents/hitpoint

# Log the start time
echo "Starting Cypress test at $(date)" >> cypress-cron.log

# Run the test and log output
npm run test:hitpoint >> cypress-cron.log 2>&1

# Log the end time
echo "Finished at $(date)" >> cypress-cron.log
echo "----------------------------------------" >> cypress-cron.log 