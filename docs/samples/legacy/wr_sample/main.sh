#!/bin/bash

OPENWBBASEDIR=$(cd "$(dirname "$0")/../../" && pwd)
RAMDISKDIR="${OPENWBBASEDIR}/ramdisk"
#DMOD="PV"
DMOD="MAIN"

MYLOGFILE="${RAMDISKDIR}/openWB.log"

bash "$OPENWBBASEDIR/packages/legacy_run.sh" "modules.devices.sample.device" "inverter" "${ip}" "1" >>"$MYLOGFILE" 2>&1
ret=$?

openwbDebugLog ${DMOD} 2 "RET: ${ret}"

cat "${RAMDISKDIR}/pvwatt"
