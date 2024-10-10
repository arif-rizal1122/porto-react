import { useState } from 'react';
import '../styles/Navbar.css';
import { FaBarsProgress } from "react-icons/fa6";
import { MdCloseFullscreen } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

// Perbaikan penggunaan Link untuk navigasi antar halaman
function Navbar() {
  const [statusTampil, setStatusTampil] = useState('tampil');
  
  function tampilMenu() {
    setStatusTampil(statusTampil === '' ? 'tampil' : '');
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          {/* Perbaikan pada penggunaan HashLink tetap sama */}
          <HashLink to="/">Arif-Rizal</HashLink>
        </div>

        <button onClick={tampilMenu}>
          {
            statusTampil === '' ? (<FaBarsProgress />) : (<MdCloseFullscreen />)
          }
        </button>
        
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
            <li><HashLink to="/#about">About</HashLink></li>
            {/* Perbaikan penggunaan Link untuk halaman Experience */}
            <li><Link to="/experience">Experience</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
