# How to run
1. Install Node.js > 22

```bash
brew install node
```

2. Install dependencies

```bash
npm install
```

3. Add your credentials in the .env file

4. Run the test

```bash
npm run test:hitpoint
```

5. Edite the line 19 and 23 of hitPoint.cy.js to hit point

6. Edit the run-hit-little-point.sh to your path

7. Configure the cron to run the test
```bash
# Open the crontab file
crontab -e

# Run at 8:30 AM
30 8 * * * /path/to/run-cypress-test.sh

# Run at 6:00 PM
0 18 * * * /path/to/run-cypress-test.sh
```

The cron job needs proper environment variables, so you might need to add them:

```bash
# Add these at the top of your crontab
PATH=/usr/local/bin:/usr/bin:/bin
NODE_PATH=/usr/lib/node_modules
HOME=/home/yourusername
```

To verify your cron jobs are set:

```bash
crontab -l
```

To monitor the logs:
```bash
tail -f cypress-cron.log
```

If you need to debug cron execution, you can check the system logs:

```bash
grep CRON /var/log/syslog
```
or
```bash
tail -f /var/log/syslog | grep cron
```