import PropTypes from 'prop-types'

type componentImageType = {
  src: string
  name?: string
}

function HeroImage({ src, name }: componentImageType) {
  return (
    <img
      src={src}
      alt={name}
      className="h-full w-full object-cover object-center"
    />
  )
}

HeroImage.propTypes = {
  /** The source of the image */
  src: PropTypes.string.isRequired,
  /** Name of the hero */
  name: PropTypes.string,
}

export default HeroImage
