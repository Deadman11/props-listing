import React from 'react'
import type { dataProcessor } from './dataProcessor'

interface ListingItemProps {
  item: dataProcessor
}

function getPrice(code: string, price: string): string {
  const formatPrice = Number(price).toFixed(2)

  switch (code) {
    case 'USD':
      return `$${formatPrice}`
    case 'EUR':
      return `€${formatPrice}`
    default:
      return `${formatPrice} ${code}`
  }
}

function highLightQunatity(quantity: number): string {
  if (quantity > 20) {
    return `high`
  }
  if (quantity > 10) {
    return `medium`
  }
  return `low`
}

export const ListingItem: React.FC<ListingItemProps> = ({ item }) => {
  return (
    <div className="item">
      <div className="item-image">
        <a href={`${item.url ?? '#'}`}>
          <img src={item.image} />
        </a>
      </div>
      <div className="item-details">
        {item.title && (
          <p className="item-title">
            {item.title.length > 50 ? `${item.title}...` : item.title}
          </p>
        )}
        {item.currency_code && item.price && (
          <p className="item-price">
            {getPrice(item.currency_code, item.price)}
          </p>
        )}
        {item.quantity && (
          <p
            className={`item-quantity level-${highLightQunatity(
              item.quantity
            )}`}
          >
            {item.quantity} left
          </p>
        )}
      </div>
    </div>
  )
}