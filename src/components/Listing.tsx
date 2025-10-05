import React from 'react';
import {type ListingItem } from './data';

interface ListingProps {
  items?: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatPrice = (price: string, currencyCode: string): string => {
    switch (currencyCode) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currencyCode}`;
    }
  };


  const getQuantityLevel = (quantity: number): string => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };


  const truncateTitle = (title: string): string => {
    return title.length > 50 ? `${title.substring(0, 50)}…` : title;
  };


  const validItems = items.filter(item => 
    item.state !== 'removed' && item.MainImage?.url_570xN
  );

  return (
    <div className="item-list">
      {validItems.map(item => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{truncateTitle(item.title)}</p>
            <p className="item-price">
              {formatPrice(item.price, item.currency_code)}
            </p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;