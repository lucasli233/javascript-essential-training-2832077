/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const myVape = {
    color: "black",
    voltage: "25",
    puffs: "4682",
    ohms: "0.6",
    composition: {
        battery: "na",
        coil: "na",
        juice: "cosmos"
    },
    powerOn: true,
    togglepower: function (powerStatus) {
        this.powerOn = powerStatus
      },

}
