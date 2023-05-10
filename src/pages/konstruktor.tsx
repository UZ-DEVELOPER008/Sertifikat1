import Img from "next/image"
import soat from "../assests/images/soat.png"
import internet from "../assests/images/internet.png"
import pul from "../assests/images/pul.png"

const Konstruktor = () => {
    return(
        <>
        <img className="konstruktor" src="https://beeline.uz/wp-content/uploads/2023/03/imidzh-site-stranicza-uzb-1440h408.png" alt="" />

        <div className="bolim">
        <div className="malumot">
            <Img src={soat} alt="this is image"/>
            <b className="soat">Daqiqalar va SMS</b>
        </div>

        <div className="malumot">
            <Img src={internet} alt="this is image"/>
            <b className="soat">Internet</b>
        </div>

        <div className="malumot">
            <Img src={pul} alt="this is image"/>
            <b className="soat">Qo'shimcha xizmatlar</b>
        </div>

        </div>
        </>
    )
}

export default Konstruktor