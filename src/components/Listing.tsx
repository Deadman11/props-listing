import React from 'react'
import type { dataProcessor } from './dataProcessor'
import { ListingItem } from './ListingItems'

interface ListingProps {
  items: dataProcessor[]
}

export const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItem key={item.listing_id} item={item} />
      ))}
    </div>
  )
}