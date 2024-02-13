"""
This Python file scans for Wifi networks and
records them in the file 'main.txt'. To scan
for Wifi networks (on Mac, at least), use the
shell command 'airport -s'.
"""
import os

# Access file
file = open('main.txt', 'w')

# Write file
file.write(os.system('airport -s'))


