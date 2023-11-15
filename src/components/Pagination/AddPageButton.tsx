import PropTypes from 'prop-types'

type AddPageButtonTypes = {
  pageNumber: number
  activeClass?: boolean
}

function AddPageButton({ pageNumber, activeClass }: AddPageButtonTypes) {
  console.log(activeClass)

  return (
    <button
      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      onClick={() => console.log(`Page clicked: ${pageNumber}`)}
    >
      {pageNumber}
    </button>
  )
}

AddPageButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  activeClass: PropTypes.bool,
}

// propTypes default
AddPageButton.defaultProps = {
  activeClass: false,
}

export default AddPageButton
