import { useRef } from "react";
import "../assets/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<nav ref={navRef}>
                <Link to={"/"}>
				<button className="buttons" href="/">Inicio</button>
                </Link>
				<div className="dividir-buttons">
                <Link to={"/buscar"}>
                <button className="buttons" href="/buscar">Buscador</button>
                </Link>
                <Link to={"/sobre-nosotros"}>
                <button className="buttons" href="/sobre-nosotros">Contacto</button>
                </Link>
				</div>
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
			</button>
		</header>
	);
}

export default Navbar;