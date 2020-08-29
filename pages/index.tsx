import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product: TProduct) => {
        return (
          <div>
            <Link
              key={product.id}
              href="/product/[id]"
              as={`/product/${product.id}`}
              passHref
            >
              <a>{product.id}</a>
            </Link>{' '}
            - {product.name} - {product.image}
          </div>
        )
      })}
    </div>
  )
}

export default HomePage
