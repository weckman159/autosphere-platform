'use client'
import { useState } from 'react';
import Button from '@/components/ui/Button';

const BRANDS = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Porsche',
  'Opel', 'Ford', 'Škoda', 'SEAT', 'Renault', 'Peugeot', 'Tesla'
];

export default function QuickSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a brand..."
        className="border rounded-lg p-2 w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        {BRANDS.filter(brand => brand.toLowerCase().includes(searchTerm.toLowerCase())).map(brand => (
          <Button key={brand}>{brand}</Button>
        ))}
      </div>
    </div>
  );
}
