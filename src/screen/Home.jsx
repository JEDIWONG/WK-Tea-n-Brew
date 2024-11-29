import IntroCard from "../component/IntroCard"
import logo from "../assets/icon/logo.png"
import matcha from "../assets/image/matcha.png"

function Home(){

    return(
        <>
            <IntroCard 
                logo={logo}
                title="Brewed with Authentic Tea Leaves"
                desc="Tea Brewing is art of life, a cup of tea is essential for everyday tight routine"
                imgUrl={matcha}
            />
        </>        
    )
}

export default Home