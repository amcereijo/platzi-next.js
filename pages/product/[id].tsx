import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  console.log('q', query)

  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((product) => {
          setProduct(product)
        })
    }
  }, [])

  return (
    <section>
      <h1>Página producto:</h1>
      <ul>
        <li>{product?.id}</li>
        <li>{product?.image}</li>
        <li>{product?.name}</li>
        <li>{product?.price}</li>
      </ul>
    </section>
  )
}

export default ProductPage
