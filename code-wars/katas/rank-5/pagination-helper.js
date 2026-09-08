/**
 * @see https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
 */
export class PaginationHelper {
  constructor(collection, itemsPerPage) {
    /**
     * @type {any[]}
     */
    this.collection = collection;

    /**
     * @type {number}
     */
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex + 1 > this.pageCount() || pageIndex < 0) return -1;

    if (this.itemsPerPage * (pageIndex + 1) < this.itemCount())
      return this.itemsPerPage;

    return (
      this.itemsPerPage -
      (this.itemsPerPage * this.pageCount() - this.itemCount())
    );
  }

  pageIndex(itemIndex) {
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;

    if (itemIndex < this.itemsPerPage) return 0;

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
