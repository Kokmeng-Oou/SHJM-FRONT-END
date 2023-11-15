import PropTypes from 'prop-types'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import SmallScreenPagination from './SmallScreenPagination'

const PageData = [
  {
    page: 1,
    pageCount: 4,
    pageSize: 10,
    total: 1349,
  },
  {
    page: 2,
    pageCount: 4,
    pageSize: 10,
    total: 1349,
  },
  {
    page: 3,
    pageCount: 4,
    pageSize: 10,
    total: 1349,
  },
  {
    page: 4,
    pageCount: 4,
    pageSize: 10,
    total: 1349,
  },
]

type propsPaginationType = { pageNumber: number; activeClass?: boolean }
function ComplexPagination() {
  const { pageCount, page } = PageData[3]

  const addPageButton = ({ pageNumber }: propsPaginationType) => {
    return (
      <button
        key={pageNumber}
        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"`}
      >
        {pageNumber}
      </button>
    )
  }

  const renderPageButtons = () => {
    const pageButtons = []
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }))

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
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }))
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
      addPageButton({
        pageNumber: pageCount,
        activeClass: page === pageCount,
      })
    )
    return pageButtons
  }

  return (
    <>
      <div
        className="flex item-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 "
        aria-label="Pagination"
      >
        {/* small screen pagination */}
        <SmallScreenPagination />
        {/* Large screen pagination */}
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700 leading-5 ">
              Showing
              <span className="font-medium">{` ${1} to ${9} of ${97} results`}</span>
            </p>
          </div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              type="button"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* render page button */}
            {renderPageButtons()}
            <button
              type="button"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

ComplexPagination.propTypes = {
  /**
   * The number of pages in the current set of data.
   */
  pageNumber: PropTypes.number,
  /**
   * The index of the currently selected page.
   */
  activePageIndex: PropTypes.number,
}

export default ComplexPagination
