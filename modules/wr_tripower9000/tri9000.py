#!/usr/bin/python
import sys
import os
import time
import getopt
import socket
import ConfigParser
import struct
import binascii
ipaddress = str(sys.argv[1])
from pymodbus.client.sync import ModbusTcpClient
client = ModbusTcpClient(ipaddress, port=502)

#pv watt
resp= client.read_holding_registers(30775,2,unit=3)
value1 = resp.registers[0]
value2 = resp.registers[1]
all = format(value1, '04x') + format(value2, '04x')
final = int(struct.unpack('>i', all.decode('hex'))[0])
if final < 0:
    final = 0
final = final * -1
with open('/var/www/html/openWB/ramdisk/pvwatt', 'w') as f:
    f.write(str(final))

#WR-AC-Leistung muss in andere Datei für Berechnung Hausverbrauch
#zunächst hier den gleichen Wert wie für pvwatt nehmen bis Modul angepasst ist
with open('/var/www/html/openWB/ramdisk/wracwatt', 'w') as f:
    f.write(str(final))

#pv Wh
resp= client.read_holding_registers(30529,2,unit=3)
value1 = resp.registers[0]
value2 = resp.registers[1]
all = format(value1, '04x') + format(value2, '04x')
final = int(struct.unpack('>i', all.decode('hex'))[0])
f = open('/var/www/html/openWB/ramdisk/pvkwh', 'w')
f.write(str(final))
f.close()
