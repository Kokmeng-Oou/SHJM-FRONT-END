import PropTypes from 'prop-types'

type propsTitleType = {
  titleText?: string
  subtitle?: string
  description?: string
  imageUrl?: string
  linkText?: string
  linkHref?: string
  buttonLabel?: string
}

function SectionTitle({ titleText }: propsTitleType) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
      {titleText}
    </h1>
  )
}

SectionTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
}

export default SectionTitle
