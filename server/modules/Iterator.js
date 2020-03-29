export default {
  async getIndex(items) {
    if (!items || items.length === 0) return 1

    var currentIndex = items[items.length - 1].index

    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      if (item.index > currentIndex) {
        currentIndex = item.index
      }
    }

    return currentIndex + 1
  }
}