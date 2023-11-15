import PropTypes from 'prop-types'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import AccordionPanel from './AccordionPanel'

type AccordionTypes = {
  filters: {
    id: string
    name: string
    options: {
      value: string
      label: string
      checked: boolean
    }[]
  }[]
}

function Accordion({ filters }: AccordionTypes) {
  return (
    <>
      {filters.map((section) => {
        const { id, name, options } = section
        return (
          <Disclosure
            as="div"
            key={id}
            className="border-b border-gray-200 py-6"
          >
            {({ open }) => {
              return (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{name}</span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      <AccordionPanel options={options} id={id} />
                    </div>
                  </Disclosure.Panel>
                </>
              )
            }}
          </Disclosure>
        )
      })}
    </>
  )
}

Accordion.propTypes = {
  filters: PropTypes.array.isRequired,
}

export default Accordion
