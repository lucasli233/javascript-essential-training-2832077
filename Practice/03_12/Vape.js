class Vape {
  constructor(color, voltage, puffs, ohms, battery, coil, juice, powerOn) {
    ;(this.color = color),
      (this.voltage = voltage),
      (this.puffs = puffs),
      (this.ohms = ohms),
      (this.composition = {
        battery: battery,
        coil: coil,
        juice: juice,
      })
    this.powerOn = powerOn
  }
  togglePower(powerStatus) {
    this.powerOn = powerStatus
  }
}

export default Vape
