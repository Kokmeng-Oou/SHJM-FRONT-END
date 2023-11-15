import PropTypes from 'prop-types'

type AccordionPanel = {
  id: string
  options: {
    value: string
    label: string
    checked?: boolean
  }[]
}

function AccordionPanel({ options, id }: AccordionPanel) {
  return (
    <>
      {options.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`filter-${id}-${optionIdx}`}
            name={`${id}[]`}
            defaultValue={option.value}
            type="checkbox"
            defaultChecked={option.checked}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor={`filter-${id}-${optionIdx}`}
            className="ml-3 text-sm text-gray-600"
          >
            {option.label}
          </label>
        </div>
      ))}
    </>
  )
}

AccordionPanel.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
    }).isRequired
  ),
}

export default AccordionPanel
