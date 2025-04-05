import { useLocation, useNavigate } from "react-router-dom";
import { useSepeda } from "../context/SepedaContext";
import { useState } from "react";

function Payment() {
  const { selectedBike } = useSepeda();
  const location = useLocation();
  const navigate = useNavigate();
  const { tanggal, durasi } = location.state || {};

  const [metode, setMetode] = useState("tunai");

  if (!selectedBike || !tanggal || !durasi) {
    return (
      <div className="container">
        <h2>Data pembayaran tidak lengkap</h2>
        <p>Silakan kembali dan pilih sepeda serta detail penyewaan.</p>
      </div>
    );
  }

  const total = selectedBike.price * durasi;

  const handleBayar = () => {
    navigate("/confirmation", {
      state: {
        bike: selectedBike,
        tanggal,
        durasi,
        total,
        metode,
      },
    });
  };

  return (
    <div className="container">
      <h2>Pembayaran</h2>
      <p><strong>Sepeda:</strong> {selectedBike.title}</p>
      <p><strong>Tanggal:</strong> {tanggal}</p>
      <p><strong>Durasi:</strong> {durasi} hari</p>
      <p><strong>Total:</strong> Rp{total}</p>

      <div style={{ marginTop: "1rem" }}>
        <h4>Pilih Metode Pembayaran:</h4>
        <label>
          <input
            type="radio"
            value="tunai"
            checked={metode === "tunai"}
            onChange={(e) => setMetode(e.target.value)}
          />{" "}
          Tunai
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="non-tunai"
            checked={metode === "non-tunai"}
            onChange={(e) => setMetode(e.target.value)}
          />{" "}
          Non-Tunai (QRIS)
        </label>
      </div>

      {metode === "non-tunai" && (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <h4>Scan QR untuk Bayar:</h4>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SekuSewaQRIS"
            alt="QR Pembayaran"
            style={{ margin: "1rem auto", borderRadius: "12px" }}
          />
          <p>Silakan scan QR di atas menggunakan aplikasi e-wallet Anda.</p>
        </div>
      )}

      <button onClick={handleBayar}>
        Bayar Sekarang
      </button>
    </div>
  );
}

export default Payment;
