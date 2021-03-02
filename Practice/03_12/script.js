/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Vape from "./Vape.js"
import Backpack from "./Backpack.js"

const myVape = new Vape("black", 25, 4682, 0.6, "na", "na", "cosmos", true)

const myBackpack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
)

console.log(myVape)
console.log(myBackpack)
