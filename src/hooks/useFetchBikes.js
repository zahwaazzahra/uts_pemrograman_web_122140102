import { useEffect, useState } from "react";

export function useFetchBikes() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://67f0e8d0c733555e24ab9063.mockapi.io/Bikes/Bikes") // ✅ Ganti dengan URL MockAPI kamu
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data) => {
        setBikes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { bikes, loading, error };
}
