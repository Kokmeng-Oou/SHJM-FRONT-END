function Image({ mainImage, ImageGallery }) {
  return (
    <div className="h-96 carousel carousel-vertical ">
      <div className="carousel-item h-full w-full object-cover object-center lg:h-full lg:w-full">
        <img src={mainImage} />
      </div>
      {ImageGallery.map((image, index) => {
        return (
          <div
            className="carousel-item h-full w-full object-cover object-center lg:h-full lg:w-full"
            key={index}
          >
            <img src={image.src} />
          </div>
        )
      })}
    </div>
  )
}
export default Image
