#!/bin/bash

# Run balena base image entrypoint script
/usr/bin/entry.sh echo "Running balena base image entrypoint..."

# Helper functions
function pa_disable_module() {
  local MODULE="$1"
  sed -i "s/load-module $MODULE/#load-module $MODULE/" /etc/pulse/default.pa
}

function alsa_select_output() {
  local OUTPUT="$1"
  declare -A outputs=(["AUTO"]=0 ["HEADPHONES"]=1 ["HDMI0"]=2 ["HDMI1"]=3)
  if [[ "${outputs[$OUTPUT]}" ]]; then
    amixer -c 0 numid=3 "${outputs[$OUTPUT]}"
  else  
    echo "Invalid ALSA output selected, falling back to defaults."
  fi
}

# Pulseaudio primitive environment variables and defaults
LOG_LEVEL="${PULSE_LOG_LEVEL:-1}"
AUDIO_OUTPUT="${ALSA_AUDIO_OUTPUT:-'AUTO'}"

# Disable pulseaudio modules that we don't support
pa_disable_module module-console-kit

# Disable pulseaudio modules that need special configuration
# These will be loaded and configured by the primitive.pa config file
pa_disable_module module-bluetooth-discover
pa_disable_module module-bluetooth-policy
pa_disable_module module-native-protocol-unix

# Select ALSA default output
alsa_select_output "$AUDIO_OUTPUT"

# If command starts with an option, prepend pulseaudio to it
if [[ "${1#-}" != "$1" ]]; then
  set -- pulseaudio "$@"
fi

# Set pulseaudio default flags if we are running it
# - (realtime, high-priority): Ensure we always have enough CPU
# - (use-pid-file): Disable PID file as it may cause bad restarts due to locked files
# - (exit-idle-time): Never terminate daemon when idle
# - (file): Extend '/etc/pulse/default.pa' with '/etc/pulse/primitive.pa'
if [[ "$1" == *"pulseaudio"* ]]; then
  shift
  set -- pulseaudio \
    --log-level="$LOG_LEVEL" \
    --use-pid-file=false \
    --realtime=true \
    --high-priority=true \
    --exit-idle-time=-1 \
    --file=/etc/pulse/primitive.pa \
    "$@"
fi

exec "$@"