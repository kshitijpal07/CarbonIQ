import React, { useState, useEffect } from 'react';
import CreditListing from './CreditListing';
import './Marketplace.css';

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    fetchMarketplaceData();
  }, []);

  const fetchMarketplaceData = () => {
    // Mock marketplace data
    setListings([
      {
        id: 1,
        seller: '0x1234...5678',
        projectName: 'Amazon Reforestation',
        quantity: 1000,
        price: 25,
        vintage: '2024',
        type: 'reforestation',
        verified: true,
        co2Offset: 500
      },
      {
        id: 2,
        seller: '0x8765...4321',
        projectName: 'Wind Farm Texas',
        quantity: 500,
        price: 30,
        vintage: '2024',
        type: 'renewable-energy',
        verified: true,
        co2Offset: 250
      }
    ]);
  };

  const filteredListings = listings.filter(listing => {
    if (filter === 'all') return true;
    return listing.type === filter;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'quantity') return b.quantity - a.quantity;
    return 0;
  });

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <h2>Carbon Credit Marketplace</h2>
        <p>Buy and sell verified carbon credits</p>
      </div>

      <div className="marketplace-filters">
        <div className="filter-group">
          <label>Filter by Type:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Types</option>
            <option value="reforestation">Reforestation</option>
            <option value="renewable-energy">Renewable Energy</option>
            <option value="methane-capture">Methane Capture</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price">Price</option>
            <option value="quantity">Quantity</option>
          </select>
        </div>
      </div>

      <div className="marketplace-grid">
        {sortedListings.map(listing => (
          <CreditListing key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
