import { useEffect, useState } from "react";

export const useStock = (id) => {
  const [stock, setStock] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const { VITE_API_URL } = import.meta.env;

  async function getStock() {
    try {
      const resp = await fetch(`${VITE_API_URL}/product/${id}/stock`)
      
      if(resp.status === 200) {
        const json = await resp.json();
  
        setStock(json)
      }
    } catch(err) {
      alert('Error getting stock data')
    } finally {
      setFirstLoad(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getStock()
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  })

  return {
    stock,
    loading: firstLoad
  }
}