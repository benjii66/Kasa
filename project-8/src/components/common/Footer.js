import logo from "../../assets/images/logo-footer.svg"

//display the footer
export const Footer = () => {
        return (
            <footer className="foot-container">
                <img src={logo} aria-label="Kasa Logo" alt="logo de Kasa" />
                <p className="foot-container_text">© 2020 Kasa. All rights reserved</p>
            </footer>
        )
}