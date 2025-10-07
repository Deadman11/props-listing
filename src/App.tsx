import { Listing } from './components/Listing'
import products from './components/data/data.json'

function App() {
  const items = products.map((product) => ({
    listing_id: product.listing_id,
    url: product.url,
    image: product.MainImage?.url_570xN,
    title: product.title,
    currency_code: product.currency_code,
    price: product.price,
    quantity: product.quantity,
  }))

  return <Listing items={items} />
}

export default App