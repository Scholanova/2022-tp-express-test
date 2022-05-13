class ShoeService {
  constructor({ shoeRepository }) {
    this.shoeRepository = shoeRepository
  }

  calculateUserCollectionValue({ userId }) {
    return this.shoeRepository.listForUserId({ userId })
      .then((shoes) => {
        //pour la marque de chaussure, je renvois sa valeur
        if (shoes.length === 0) {
          return 0
        }
        switch (shoes[0].brand) {
          case 'Bacoste':
            return 150

          case 'Bucci':
            return 250

          case 'Bobotin':
            return 350

          default:
            return 100
        }
      })
  }
}

module.exports = {
  ShoeService,
}