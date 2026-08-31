/**
 * @see https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript
 */
export class User {
  rank = -8;
  progress = 0;
  #ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  #lastRank = this.#ranks[this.#ranks.length - 1];
  #firstRank = this.#ranks[0];

  incProgress(rank) {
    if (rank > this.#lastRank || rank < this.#firstRank || !rank)
      throw new Error("The rank is not correct");

    if (this.rank === this.#lastRank) return;

    if (rank > this.rank) {
      const differenceRank = this.#getDifferenceRanks(rank);
      this.progress += 10 * differenceRank * differenceRank;
    } else {
      this.progress += rank === this.#getPreviosRank() ? 1 : 3;
    }

    this.#checkProgress();
  }

  #checkProgress() {
    if (this.progress >= 100) {
      this.rank = this.#getNextRank();
      this.progress = this.rank === this.#lastRank ? 0 : this.progress - 100;
    }

    if (this.progress > 100) this.#checkProgress();
  }

  #getPreviosRank() {
    return this.#ranks[this.#ranks.indexOf(this.rank) - 1];
  }

  #getNextRank() {
    return this.#ranks[this.#ranks.indexOf(this.rank) + 1] || this.#lastRank;
  }

  #getDifferenceRanks(rank) {
    return this.#ranks.indexOf(rank) - this.#ranks.indexOf(this.rank);
  }
}
