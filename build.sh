#!/bin/bash

BUGGED_FILE="$(pwd)/node_modules/react-native/local-cli/core/__fixtures__/files/package.json"

if [ "$1" = "--debug" ]; then
	npm run react-devtools &
	DEVTOOLS_PID=$!
fi

# Remove everything about BUGGED_FILE once react-native devs fix the bug
if [ -f "$BUGGED_FILE" ]; then
	rm $BUGGED_FILE
fi

# Check if server already is up and kill it
case $(netstat -antu | grep 8081) in
	*8081*)
		# Hiding command output in case it outputs errors
		lsof -i tcp:8081 | awk '{print $2}' | xargs kill > /dev/null 2>&1
	;;
esac

# Launch server
npm start &
JS_SERVER_PID=$!

# Launch Android
npm run android && ANDROID_SDK_PID=$! && wait

# After cancelling the build kill the processes
kill $DEVTOOLS_PID $JS_SERVER_PID $ANDROID_SDK_PID