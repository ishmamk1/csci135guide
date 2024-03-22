const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/csci135guide"><h1>CSCI-135 Guide</h1></a>
            <div className="links">
                <a href="/#">About</a>
                <a href="/#" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }
                }>Blah</a>
            </div>
        </nav>
    );
}

export default Navbar;