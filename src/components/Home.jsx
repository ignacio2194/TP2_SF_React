import Footer from "./Footer";
const Home = () => {
    return(
        <div className=" text-white text-center text-lg">
            <div className="  bg-container absolute top-[10rem] left-0 right-0  ">
            <h2>Proyecto: Second Check Point</h2>
            <h2>Curso: Skill Factory de React.js</h2>
            <h2>Dictado por: Fabian Tureo para Avalith</h2>
            <h2>Integrantes:</h2>
            <ul className="devsList">
                <li>Benitez, Ignacio</li>
                <li>Cazal, Damian</li>
                <li>Scharf, Guillermo</li>
            </ul>
            </div>
         
        
            
            <Footer/>
        </div>        
    )
}

export default Home;