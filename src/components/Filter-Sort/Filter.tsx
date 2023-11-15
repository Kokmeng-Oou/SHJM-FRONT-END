// import PropTypes from 'prop-types'
import SubCategories from './SubCategories'
import Accordion from './Accordion'
import { filters } from '../../config/Filter'
import FormRange from '../Forms/FormRange'
function Filter() {
  return (
    <>
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        <FormRange name="price" label="select price" size="range-xs " />
      </ul>
      <Accordion filters={filters} />
    </>
  )
}

Filter.propTypes = {}

export default Filter
