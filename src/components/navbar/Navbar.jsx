import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

const Navbar = () => {
    const reload = () => window.location.reload()
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <img className="logo" onClick={reload} src="/rachman-logo.png" alt="Rachman" />
            <div className="social">
                <a href="#"><img src="/youtube.png" alt="facebook" /></a>
                <a href="#"><img src="/instagram.png" alt="facebook" /></a>
                <a href="#"><img src="/linkedin.png" alt="facebook" /></a>
                <a href="#"><img src="/github.png" alt="facebook" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar