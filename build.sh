#!/bin/bash
debug=false
android=false

BUGGED_FILE="$(pwd)/node_modules/react-native/local-cli/core/__fixtures__/files/package.json"

for arg in "$@"
do
	if [ "$arg" = "--debug" -o "$arg" = "-d" ]; then
		debug=true
	fi
	if [ "$arg" = "--android" -o "$arg" = "-a" ]; then
		android=true
	fi
done

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
yarn start &
JS_SERVER_PID=$! &

if [ "$debug" = true ]; then
	xdg-open http://localhost:8081/debugger-ui &
	yarn react-devtools &
	DEVTOOLS_PID=$!
fi

if [ "$android" = true ]; then
	# Launch Android
	yarn android && ANDROID_SDK_PID=$!
fi

wait

# After cancelling the build kill the processes
kill $DEVTOOLS_PID $JS_SERVER_PID $ANDROID_SDK_PID
