import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Beranda</Link>
      <Link to="/rent" style={{ marginRight: '1rem' }}>Sewa Sekarang</Link>
    </nav>
  );
}

export default Navbar;
