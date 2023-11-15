import PropTypes from 'prop-types'
import HeroImage from './HeroImage'

type ImageType = {
  image:
    | {
        src: string
        name?: string
        opacity?: boolean
      }[]
}

function GridImage({ image }: ImageType) {
  return (
    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
      {image.map((img, index) => {
        const { src, name, opacity } = img
        return (
          <div
            key={index}
            className={`h-64 w-44 overflow-hidden rounded-lg ${
              opacity ? 'sm:opacity-0 lg:opacity-100`' : ''
            }`}
          >
            <HeroImage src={src} name={name} />
          </div>
        )
      })}
    </div>
  )
}

GridImage.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
      opacity: PropTypes.bool,
    })
  ).isRequired,
}

export default GridImage
