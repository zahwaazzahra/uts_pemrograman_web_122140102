import { useFetchBikes } from "../hooks/useFetchBikes";
import { useNavigate } from "react-router-dom";
import { useSepeda } from "../context/SepedaContext";

function Home() {
  const { bikes, loading, error } = useFetchBikes();
  const { setSelectedBike } = useSepeda();
  const navigate = useNavigate();

  const handleSewa = (bike) => {
    setSelectedBike(bike);
    navigate("/rent");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Seku - Sewa Sepedaku</h1>
      <h2>Manfaat Bersepeda</h2>
      <p>Berolahraga, hemat energi, dan menjaga lingkungan.</p>

      <h2>Daftar Sepeda</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {bikes.map((bike) => (
          <div key={bike.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            <h3>{bike.title}</h3>
            <img
              src={bike.thumbnail}
              alt={bike.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <p>{bike.description}</p>
            <p><strong>Harga:</strong> Rp{bike.price}</p>
            <button onClick={() => handleSewa(bike)}>
              Sewa Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
