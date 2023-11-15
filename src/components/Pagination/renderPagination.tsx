import AddPageButton from './AddPageButton'

const renderPageButtons = (page: number, pageCount: number) => {
  const pageButtons = []
  // first button
  pageButtons.push(AddPageButton({ pageNumber: 1, activeClass: page === 1 }))

  // dots
  if (page > 2) {
    pageButtons.push(
      <span
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
        key="dots-1"
      >
        ...
      </span>
    )
  }

  // active/current page
  if (page !== 1 && page !== pageCount) {
    pageButtons.push(AddPageButton({ pageNumber: page, activeClass: true }))
  }
  // dots
  if (page < pageCount - 1) {
    pageButtons.push(
      <span
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
        key="dots-2"
      >
        ...
      </span>
    )
  }

  // last button
  pageButtons.push(
    AddPageButton({
      pageNumber: pageCount,
      activeClass: page === pageCount,
    })
  )
  return pageButtons
}

export default renderPageButtons
