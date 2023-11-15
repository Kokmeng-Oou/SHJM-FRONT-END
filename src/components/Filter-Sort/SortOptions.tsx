import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// type SortOptionsTypes = {
//   sortBy?: string,
//   order?: string,
//   onSortChange?: (sortBy: string) => void,
// }

type propsOptionTypes = {
  Item: NonNullable<PropTypes.ReactComponentLike>
  options: {
    name: string
    href: string
    current: boolean
  }[]
}

function SortOptions({ Item, options }: propsOptionTypes) {
  return (
    <div className="py-1">
      {options.map((option) => (
        <Item key={option.name}>
          <Link
            to={option.href}
            className={classNames(
              option.current
                ? 'font-medium text-gray-900 bg-gray-10 '
                : 'text-gray-500',
              'block px-4 py-2 text-sm'
            )}
          >
            {option.name}
          </Link>
        </Item>
      ))}
    </div>
  )
}

SortOptions.propTypes = {
  Item: PropTypes.elementType.isRequired,
  options: PropTypes.array.isRequired,
}

export default SortOptions
