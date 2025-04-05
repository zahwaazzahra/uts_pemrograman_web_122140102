import React from 'react';
import useSepedaData from '../hooks/useSepedaData';

const ListSepeda = () => {
  const { data: sepeda, loading, error } = useSepedaData('/sepeda.json'); // atau URL API kamu

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Daftar Sepeda:</h2>
      <ul>
        {sepeda.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp{item.harga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSepeda;
