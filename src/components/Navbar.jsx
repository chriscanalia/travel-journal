import Logo from '../assets/navIcon.png'

function Navbar() {
    return (
        <div className="nav">
            <img className='logo' src={Logo} alt="alt text" />
            <p className='nav-title'>my travel journal</p>
        </div>
        
    )
}

export default Navbar