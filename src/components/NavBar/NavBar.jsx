import './NavBar.css';

const NavBar = () => {
    function toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }

    return (
        <>
            <div id="sidebar">
                <div className="toggle-btn" onClick={toggleSidebar}>
                    <span></span><span></span><span></span>
                </div>
                <nav>
                    <ul>
                    <li className="sidebar-brand"><a href="#">Covid Portal</a></li>
                    <li className="list"><a href="#">Hospital</a></li>
                    <li className="list"><a href="#">Vaccination</a></li>
                    <li className="list"><a href="#">Guideline</a></li>
                    </ul>
                </nav>
            </div>
            <nav class="nav">
                <ul></ul>
                <ul class="navList">
                    <li class="navItem"><a href="#">SignUp</a></li>
                    <li class="navItem"><a href="#">SignIn</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;