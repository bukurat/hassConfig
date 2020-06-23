# HassConfig
Home Assistant Configuration 

This is an ongoing venture.
Running on a Levano Flex 10 notebook with Ubuntu 18.04 and docker.

Garage Doors.

These are Sonoff SV modules with the relays converted to dry contact.
Configuration:
GPIO14 - Switch1. Used for door magnetic reed switch to show closed or open.
PulseTime - 5. Pulse relay for half a second.
SwitchTopic1 - doorstate<door#>

