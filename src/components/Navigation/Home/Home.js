import "./Home.css";

function Home(){
        return(
             <div className="main">
                <div className="container_main">
                    <h1>Hello, there!</h1>
                    <p>This is my portfolio, where you can view my projects.</p>
                    <div className="source">
                        <p className="source_p">View the project source code :</p>
                        <a className="source_a" href="https://github.com/i39q/MyPortfolio" target="_blank" rel="noreferrer" >GitHub </a>
                        <a className="source_a" href="https://notabug.org/i39q/MyPortfolio" target="_blank" rel="noreferrer" >NotABug</a>
                    </div>
                </div>
             </div>
        )
}

export default Home;