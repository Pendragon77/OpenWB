#!/usr/bin/env python3
import logging
from typing import Optional
from modules.common import req
from modules.common.component_state import BatState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.store import get_bat_value_store
from modules.common.simcount._simcounter import SimCounter
from modules.devices.shelly.shelly.config import ShellyBatSetup

log = logging.getLogger(__name__)


class ShellyBat:

    def __init__(self,
                 device_id: int,
                 component_config: ShellyBatSetup,
                 address: str,
                 factor: int,
                 generation: Optional[int]) -> None:
        self.component_config = component_config
        self.sim_counter = SimCounter(device_id, self.component_config.id, prefix="speicher")
        self.store = get_bat_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))
        self.address = address
        self.factor = factor
        self.generation = generation

    def total_power_from_shelly(self) -> int:
        total = 0
        if self.generation == 1:
            status_url = "http://" + self.address + "/status"
        else:
            status_url = "http://" + self.address + "/rpc/Shelly.GetStatus"
        status = req.get_http_session().get(status_url, timeout=3).json()
        try:
            if self.generation == 1:
                if 'meters' in status:
                    meters = status['meters']  # shelly
                else:
                    meters = status['emeters']  # shellyEM & shelly3EM
                # shellyEM has one meter, shelly3EM has three meters:
                for meter in meters:
                    total = total + meter['power']
            else:
                if 'switch:0' in status:
                    total = status['switch:0']['apower']
                elif 'pm1:0' in status:
                    total = status['pm1:0']['apower']  # shelly PM Mini Gen 3
                else:
                    total = status['em:0']['total_act_power']  # shelly Pro3EM
        except KeyError:
            log.exception("unsupported shelly device?")
        finally:
            return int(total)

    def update(self) -> None:
        bat = self.total_power_from_shelly() * self.factor
        imported, exported = self.sim_counter.sim_count(bat)
        bat_state = BatState(
            power=bat,
            imported=imported,
            exported=exported
        )
        self.store.set(bat_state)


component_descriptor = ComponentDescriptor(configuration_factory=ShellyBatSetup)