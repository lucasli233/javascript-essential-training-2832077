/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js"
import Book from "./Book.js"

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
)

const dune1 = new Book("Dune1", 501, true)
const dune2 = new Book("Dune2", 502, false)
const dune3 = new Book("Dune3", 503, true)
const dune4 = new Book("Dune4", 504, false)

console.log("The everydayPack object:", everydayPack)
console.log("The pocketNum value:", everydayPack.pocketNum)
console.log("Days since aquired:", everydayPack.backpackAge())

console.log(dune1)
console.log(dune2)
console.log(dune3)
console.log(dune4)
