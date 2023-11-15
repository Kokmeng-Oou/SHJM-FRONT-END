const formatUSPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

// convert dollar to khmer currency , along with daily rate

export { formatUSPrice }
