import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

/*
static page - onle without API call

export async function getStaticPaths() { // needed for dynamic static pages
    const response: TAPIAvoResponse = await fetch(
        `${process.env.API_HOST}/api/avo`
      ).then((response) => response.json())
  return {
    paths: response.data.map((avo) => ({ params: { id: avo.id } })),
    // incremental static generation
    fallback: false, // other page not specified in "paths", will return 404
  };
}

export async function getStaticProps(/ { params } /) { //GetStaticProps
  const id = params.id as string
  const product: TProduct = await fetch(
    `${HOST}/api/avo/${id}`
  ).then((response) => response.json())

  return {
    props: {
      product,
    },
  }
}
*/

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
