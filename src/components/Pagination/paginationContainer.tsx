import { useLoaderData } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import SmallScreenPagination from './SmallScreenPagination'
import renderPageButtons from './renderPagination'

function paginationContainer() {
  const { meta } = useLoaderData()
  console.log(meta)

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
              <span className="font-medium">{` ${meta.page} to ${meta.limit} of ${meta.total} results`}</span>
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
            {renderPageButtons(meta.page, meta.pages)}
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

export default paginationContainer
