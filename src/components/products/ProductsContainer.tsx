import { useLoaderData } from 'react-router-dom'
import { formatUSPrice } from '../../utils/formatPrice'
import ProductsDetails from './ProductsDetails'
import Image from './Image'

function ProductContainer() {
  const { data } = useLoaderData()
  console.log(data)

  return (
    <div className="bg-white  pb-6">
      <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 lg:w-auto z-50">
                {/* <img
                  src={product.mainImage}
                  alt={product._id}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                /> */}
                <Image
                  mainImage={product.mainImage}
                  ImageGallery={product.ImageGallery}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className=" text-gray-900 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.modelName}
                    </a>
                  </h3>
                  <ProductsDetails title={'Brand'} info={product.brand} />
                  <ProductsDetails
                    title={'Price start from'}
                    info={formatUSPrice(product.price)}
                  />
                  <ProductsDetails
                    title={'Condition'}
                    info={`${product.condition}%`}
                  />{' '}
                  <ProductsDetails
                    title={'Made From'}
                    info={`${product.madeFrom}`}
                  />
                  <ProductsDetails
                    title={'Year Of Manufacture'}
                    info={`${product.yearOfManufacture}`}
                  />{' '}
                  <ProductsDetails
                    title={'Available'}
                    info={`${product.inventory}`}
                  />
                  <ProductsDetails
                    title={'Telegram Contact'}
                    info={`${product.tel}`}
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 flex flex-col gap-2">
                  {product.color.map((color, index) => {
                    return (
                      <button
                        key={index}
                        type="button"
                        className={`badge w-7 h-4 mr-2 border-gray-500`}
                        style={{ backgroundColor: color }}
                      ></button>
                    )
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ProductContainer.propTypes = {}

export default ProductContainer
