import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [productID, setProductID] = useState<TProduct>()

  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then(({data, length}) => {
        setProductID(data)
      })
  }, [])
  console.log("avocado.name",productID && productID.name)
  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      {productID?.name}
    </section>
  )
}

export default ProductPage
