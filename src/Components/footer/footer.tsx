import Img from "next/image"
import shaxs from "../../assests/images/shaxs.png"
import aloqa from "../../assests/images/aloqa.png"
import mobil from "../../assests/images/mobil.png"
import balans from "../../assests/images/balans.png"


const Footer = () => {
    return(
        <>
        <div className="footer">
            <hr />
            <div className="yordam">
                <Img src={shaxs} alt='this is image' />
                <div>
                <h3 className="title">Shaxsiy kabinet </h3>
                <h4 className="title">Sizning raqamingiz uchun barcha statistika</h4>
                </div>
            </div>


            <div className="yordam">
                <Img src={aloqa} alt='this is image' />
                <div>
                <h3 className="title">Beeline aloqa markazi</h3>
                <h4 className="title">Biz bilan bog'lanishning 5 dan ortiq usullari</h4>
                </div>
            </div>


            <div className="yordam">
                <Img src={mobil} alt='this is image' />
                <div>
                <h3 className="title">Mobil yordamchi Uzbekistan (iOS va Android)</h3>
                 <h4 className="title">Raqamingiz boshqaring</h4>
                </div>
            </div>


            <div className="yordam">
                <Img src={balans} alt='this is image' />
                <div>
                <h3 className="title">Balansni toʼldirish</h3>
                <h4 className="title">Uyingizdan chiqmasdan balansingizni to'ldiring</h4>
                </div>
            </div>
        </div>

        <hr />


        <div className="titles">
            <div>
                <b className="string">Mobil aloqa</b>
                <p className="string">Tariflar</p>
                <p className="string">Xizmatlar</p>
                <p className="string">Xizmatlar uchun to’lov</p>
                <p className="string">Aksiyalar</p>
                <p className="string">Qamrov hududi va ofislar</p>
                <p className="string">«Beeline» dan 4G</p>
            </div>


            <div>
                <b className="string">Statsionar aloqa</b>
                <p className="string">Xalqaro telefoniya</p>
                <p className="string">Telefon kodlari</p>
                <p className="string">Telefon tarmog’iga ulanish</p>
                <p className="string">Simli Internet</p>
            </div>


            <div>
                <b className="string">Ilovalar va xizmatlar</b>
                <p className="string">Axborot va ko’ngil ochar xizmatlar</p>
                <p className="string">Beeline Uzbekistan ilovasi</p>
                <p className="string">Beeline TV</p>
                <p className="string">Beeline Music & Radio</p>
                <p className="string">Beepul to’lov tizimi</p>
                <p className="string">Beeline Club 2.0</p>
                <p className="string">Data center</p>
            </div>


            <div>
                <b className="string">Kompaniya</b>
                <p className="string">Biz haqimizda</p>
                <p className="string">Komplaens</p>
                <p className="string">Huquqiy hujjatlar</p>
                <p className="string">Bo’sh ish o’rinlar</p>
                <p className="string">Amaliyot</p>
                <p className="string">Vazifa va yondashuv</p>
                <p className="string">Tenderlar</p>
                <p className="string">Ofislar</p>
                <p className="string">Rahbariyat</p>
                <p className="string">Qanday diler bo’lish mumkin</p>
                <p className="string">Kontaktlar</p>
            </div>


            <div>
                <h2 className="string">0611</h2>
                <p className="string">beeline abonentlari uchun</p>
                <h2 className="string">(90) 185-00-55</h2>
                <p className="string">Har qanday raqamdan qo'ng'iroqlar uchun className="string"</p>
            </div>
        </div>

        </>
        
    )
}

export default Footer