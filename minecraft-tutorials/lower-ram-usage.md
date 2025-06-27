# How to lower ram usage

### Noticing RAM usage being high? Here is some tips to reduce it!

### Option 1: Daily Restarts
One issue with software as a whole is how it handles junk data, some try as hard as they can to reduce it, but it's still there, so best way to clear it and give it a fresh start is having a daily restart.

#### How can I set this up?
To setup daily restarts here is what you can do:

#### Log into our game panel
* Head over to the panel: [https://panel.shardhost.com](https://panel.shardhost.com)
* Enter your account credentials to log in (if not already logged in)

#### Create New Schedule

* Click on the Schedules tab on your left hand side.
* Select "Create Schedule" button.
* Enter the schedule name you would like (in this case something like "Daily Restart").
* Now, the confusing bit, setting the actual occurrence of the schedule, in this case doing `0 0 * * *` would do it for everyday at 12:00 AM, if you need a easier visualization of it, you can use something like [SeverAuth's Crontab Generator](https://serverauth.com/crontab-generator) to create a new time (or use the `SHOW CHEATSHEET` button).
* Keep `ONLY WHEN SERVER IS ONLINE` enabled, this is so it only restarts when it's online (no garbage memory when it's offline, so no need for it to run).
* Click on `Create Schedule`, and your done!

### Option 2: Lower the amount of plugins you have (or use less resource intensive plugins)
To be honest, some plugins are not optimized, which can cause a large amount of memory usage or it can even slow down the TPS (ticks per second) on the server, which kills the mood for players and makes staff have to deal with players asking "Why is server so slow" so trying to limit or find better programmed plugins will reduce the amount of RAM (and CPU) that gets used, allowing there to be extra for each plugin in case it needs it! Allowing for a smoother experience for everyone.

### Option 3: Using better start options
Sometimes doing all of this it can still be a lot, so using a better starting argument can make it perform a lot better, luckily ShardHost already has a good enough start argument, making it a lot better than the default, but if you notice something could be better, please feel free to reach out to the team and we can either fix all servers, or only change it for yours!