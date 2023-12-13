import logo from "../../assets/images/logo-footer.svg"

export const Footer = () => {
        return (
            <footer>
                <img src={logo} aria-label="Kasa Logo" alt="logo de Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
}