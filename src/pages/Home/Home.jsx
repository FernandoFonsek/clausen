import Footer from "../../components/Footer/Footer";
import Header from "../../components/Headers/Headers";
import Logo from "../../components/icon/logo";
import Section from "../../components/section/section";
import "./home.scss"


const Home = () => {
    return (
        <div className="container">
            <Header/>
            <div className="color hvr-float-shadow">
                <Logo width={100} height={100}/>
                <h3>CLAUSEN STRAWBERRY</h3>
                <h4 className="tittle">¿  Y si te antojas de algo  ?</h4>
                <Section/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Home;