import "../style/introcard.css"

function IntroCard(props){

    return(
        <>
            <div className="intro-card-container">

                <div className="intro-card-details">

                    <div className="intro-card-logo">   
                        <img src={props.logo}></img>
                        <h3>WK Tea & Brew</h3>
                    </div>

                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>

                    <div className="intro-button-bar">
                        <button className="btn-filled">Order</button>
                        <button className="btn-outlined">About</button>
                    </div>
                    
                </div>
                
                <img className="intro-card-img" src={props.imgUrl}></img>
            </div>
        </>        
    )

}

export default IntroCard