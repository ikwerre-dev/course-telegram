'use client'

import { useEffect, useState } from 'react'

interface CryptoData {
  name: string
  symbol: string
  price: string
  change: string
}

export default function CryptoTicker() {
  const [cryptos] = useState<CryptoData[]>([
    { name: 'Bitcoin', symbol: 'BTC', price: '85,175', change: '1.35' },
    { name: 'Cardano', symbol: 'ADA', price: '0.71', change: '1.13' },
    { name: 'Ethereum', symbol: 'ETH', price: '2,007', change: '1.13' },
    { name: 'XRP', symbol: 'XRP', price: '2.42', change: '1.87' },
    { name: 'Tether', symbol: 'USDT', price: '1.00', change: '0.01' },
  ])

  return (
    <div className="bg-dark-light py-4 overflow-hidden">
      <div className="animate-scroll flex whitespace-nowrap">
        {[...cryptos, ...cryptos].map((crypto, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-gold font-bold">{crypto.name}</span>
            <span className="text-gray-400 mx-2">{crypto.symbol}</span>
            <span className="text-white">$ {crypto.price}</span>
            <span className="text-green-500 ml-2">+{crypto.change}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}