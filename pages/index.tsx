import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

export async function getServerSideProps(/* params */) {
  const response: TAPIAvoResponse = await fetch(
    `${process.env.API_HOST}/api/avo`
  ).then((response) => response.json())

  return {
    props: {
      productList: response.data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
