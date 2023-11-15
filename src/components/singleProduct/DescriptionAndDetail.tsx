import Detail from './Detail'

function DescriptionAndDetail({
  brand,
  condition,
  inventory,
  madeFrom,
  tel,
  yearOfManufacture,
}) {
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
      {/* Description and details */}
      <div className="mt-5">
        <h2 className=" text-gray-900 font-bold text-xl">Details</h2>
        <Detail title={'Brand'} info={brand} />
        <Detail title={'condition'} info={condition} />
        <Detail title={'Avalible in stock'} info={inventory} />
        <Detail title={'Year Of Manufacture'} info={yearOfManufacture} />
        <Detail title={'Contact by Telegram'} info={tel} />
        <Detail title={'From'} info={madeFrom} />
      </div>
    </div>
  )
}
export default DescriptionAndDetail
