import { Form } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { getProducts } from '../utils/services/BaseURL'
// import Loading from './Loading/Loading'
import HeroSection from '../components/Sections/Hero/HeroSection'

import {
  MobileDialog,
  FormInput,
  SectionTitle,
  Filter,
  Sort,
  Pagination,
  ProductContainer,
} from '../components'

const ProductsQuery = {
  queryKey: ['products'],
  queryFn: () => getProducts(),
}

export const loader = (queryClient: QueryClient) => async () => {
  const response = await queryClient.ensureQueryData(ProductsQuery)
  const { data, meta } = response.data
  return { data, meta }
}

function Landing() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <>
      <HeroSection />
      <MobileDialog
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
      <main className="mx-auto max-w-7xl pt-24 px-4 sm:px-6 lg:px-8 ">
        <section>
          {/* search for products */}
          <Form>
            <FormInput
              name="searchInput"
              type="input"
              styleClass="input mt-5 border-indigo-500/75"
              defaultValue=""
              placeholder="Search"
            />
          </Form>
        </section>
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
          {/* section title */}
          <SectionTitle titleText={'Our Products'} />
          {/* sort by && (grid || list ) */}
          <Sort setMobileFiltersOpen={setMobileFiltersOpen} />
        </div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* filters = { brandList , color, category, part} */}
            <Form className="hidden lg:block">
              <Filter />
            </Form>
            {/* product */}
            <div className="lg:col-span-3">
              {/* Your content */}
              <ProductContainer />
              <Pagination />
            </div>
            {/* pagination */}
          </div>
        </section>
      </main>
    </>
  )
}

export default Landing
