import logo from "../../assets/images/logo-footer.svg"

//component to display the footer
export const Footer = () => {
        return (
            <footer className="foot-container">
                {/* display the logo */}
                <img src={logo} aria-label="Kasa Logo" alt="logo de Kasa" />
                {/* display the copyright */}
                <p className="foot-container_text">© 2020 Kasa. All rights reserved</p>
            </footer>
        )
}