import backgroundBanner from "../../assets/images/background-banner.png"
export const Banner = () => {
    return (
        <div>
            <img src ={backgroundBanner} alt ="Chez vous et partout ailleurs" aria-label="Kasa Home"/>
                {/* container */}
            <div> 
                {/* text container */}
                {/* text */}
                <div>Chez vous, partout et ailleurs</div>
            </div>
        </div>
    )
}