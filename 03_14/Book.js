class Book {
  constructor(name, pages, coverOpen) {
    this.name = name
    this.pages = pages
    this.coverOpen = coverOpen
  }
  toggleCover(lidStatus) {
    this.coverOpen = coverOpen
  }
}

export default Book
