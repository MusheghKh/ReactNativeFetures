#!/bin/bash

#Run this if wachman start sucking

echo fs.inotify.max_user_instances=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo fs.inotify.max_queued_events=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

watchman shutdown-server; WATCHMAN_CONFIG_FILE=./.wachmanconfig watchman --foreground --logfile=/dev/stdout --no-save-state --statefile=/dev/null