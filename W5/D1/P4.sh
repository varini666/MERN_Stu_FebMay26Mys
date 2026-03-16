# stop the script if a command fails
#version check
set-e

echo "Checking Node.js installation"
node -v
npm -v