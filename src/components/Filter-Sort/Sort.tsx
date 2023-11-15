import PropTypes from 'prop-types'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Squares2X2Icon, FunnelIcon } from '@heroicons/react/20/solid'
import SortOptions from './SortOptions'
import { Fragment } from 'react'
import sortOptions from '../../config/sortOptions'

type sortType = {
  setMobileFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Sort({ setMobileFiltersOpen }: sortType): React.JSX.Element {
  return (
    <div className="flex item-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            Sort
            <ChevronDownIcon
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <SortOptions Item={Menu.Items} options={sortOptions} />
          </Menu.Items>
        </Transition>
      </Menu>
      <button
        type="button"
        className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
      >
        <span className="sr-only">View grid</span>
        <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="sr-only">Filters</span>
        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

Sort.propTypes = {
  setMobileFiltersOpen: PropTypes.func.isRequired,
}

export default Sort
