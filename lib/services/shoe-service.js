class ShoeService {
  constructor({ shoeRepository }) {
    this.shoeRepository = shoeRepository
  }

  calculateUserCollectionValue({ userId }) {
    return this.shoeRepository.listForUserId({ userId })
      .then((shoes) => {
        return shoes.length * 100
      })
  }
}

module.exports = {
  ShoeService,
}