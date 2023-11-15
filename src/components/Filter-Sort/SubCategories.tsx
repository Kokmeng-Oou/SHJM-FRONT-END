import PropTypes from 'prop-types'

type SubCategoriesTypes = {
  subCategories: {
    name: string
    href: string
  }[]
}

function SubCategories({ subCategories }: SubCategoriesTypes) {
  return (
    <>
      {subCategories.map((category) => {
        return (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        )
      })}
    </>
  )
}

SubCategories.propTypes = {
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
}

export default SubCategories
