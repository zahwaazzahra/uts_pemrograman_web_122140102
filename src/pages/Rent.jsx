import { useSepeda } from "../context/SepedaContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Rent() {
  const { selectedBike } = useSepeda();
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState("");
  const [durasi, setDurasi] = useState(1);

  const handleLanjut = () => {
    if (!tanggal || !durasi) return alert("Isi tanggal dan durasi dulu ya!");
    navigate("/payment", { state: { tanggal, durasi: parseInt(durasi) } });
  };

  if (!selectedBike) return <p>Silakan pilih sepeda terlebih dahulu.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Penyewaan Sepeda: {selectedBike.title}</h2>
      <p>Harga: Rp{selectedBike.price}/hari</p>

      <label>Tanggal Sewa:</label>
      <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />

      <label>Durasi (hari):</label>
      <input type="number" value={durasi} onChange={(e) => setDurasi(e.target.value)} min="1" />

      <button onClick={handleLanjut} style={{ marginTop: '1rem' }}>
        Lanjut ke Pembayaran
      </button>
    </div>
  );
}

export default Rent;
