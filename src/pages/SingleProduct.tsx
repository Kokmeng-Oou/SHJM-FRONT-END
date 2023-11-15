import { fetchSingleProducts } from '../utils/services/BaseURL'
import { QueryClient } from '@tanstack/react-query'
import { useLoaderData } from 'react-router-dom'
import ImageGallery from '../components/singleProduct/ImageGallery'
import DescriptionAndDetail from '../components/singleProduct/DescriptionAndDetail'
import Colors from '../components/singleProduct/Colors'
import { formatUSPrice } from '../utils/formatPrice'

const SingleProductQuery = (id: string) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: (id: string) => fetchSingleProducts(id),
  }
}
export const loader =
  (queryClient: QueryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      SingleProductQuery(params.productId)
    )
    const { data } = response.data
    return data
  }

function SingleProduct() {
  const data = useLoaderData()
  const price = formatUSPrice(data.price)

  return (
    <div className="bg-white">
      <h1>This is the single product page</h1>
      <div className="pt-6">
        {/* breadcrumb
        <Breadcrumb /> */}
        {/* Image gallery */}
        <ImageGallery mainImage={data.mainImage} gallery={data.ImageGallery} />
      </div>
      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {data.modelName}
          </h1>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h4 className="text-md font-medium tracking-wider capitalize">
            Price
          </h4>
          <p className="text-3xl tracking-tight text-gray-900">{price}</p>
          {/* Colors */}
          <Colors colors={data.color} />
        </div>
        {/* Description and details */}
        <DescriptionAndDetail
          brand={data.brand}
          condition={data.condition}
          inventory={data.inventory}
          madeFrom={data.madeFrom}
          tel={data.tel}
          yearOfManufacture={data.yearOfManufacture}
        />
      </div>
    </div>
  )
}
export default SingleProduct
