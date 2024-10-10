import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/404.css'

function NotFound404() {
  return (

    <>
    <Navbar />
    <section>
      <div className='not-found'>
        <div className="wrapper">
          <h3>OOPS...</h3>
          <p>Halaman yg anda tujuan tidak ditemukan</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
    
  )
}

export default NotFound404