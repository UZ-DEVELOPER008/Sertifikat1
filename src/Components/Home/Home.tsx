import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import tarif1 from '@/assests/images/tarif1.png'


const Home: FC = () => {
    return (
        <>
        <div className="main">
            <h1>Тарифные планы</h1>
            
            <div className="main-buttons">
                <button className="btn">Все</button>
                <button className="btn">Роуминг</button>
                <button className="btn">Звонки</button>
                <button className="btn">Всё в одном</button>
                <button className="btn">Спорт</button>
                <button className="btn">Status</button>
            </div>
        </div>

            <Link href={'/konstruktor'}><Image className="Img" src={tarif1} alt='this is image'/></Link>

            <h1 style={{marginLeft:'68px', marginTop:'50px'}}>YANA</h1>
            
            <div className="yana">
                <div className="konlar">
                    <Link href={'/yana/yanatorrta'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/yana_4_346_425-uz-1.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/yana/yanatorrta'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanatorrta'}><p className="title1"><b>35</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanatorrta'}><p className="title3"><b>70</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanatorrta'}><p className="title1"><b>1000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanatorrta'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                <div className="summa">
                    <Link className="title1" href={'/yana/yanatorrta'}><h1>70 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/yana/yanatorrta'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>



                <div className="konlar">
                    <Link href={'/yana/yanauchta'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/yana_3_346_425_uz.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/yana/yanauchta'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanauchta'}><p className="title1"><b>20</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanauchta'}><p className="title3"><b>40</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanauchta'}><p className="title1"><b>1000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanauchta'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                <div className="summa1">
                    <Link className="title1" href={'/yana/yanauchta'}><h1>50 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/yana/yanauchta'}><h4 className="batafsil">Batafsil1</h4></Link>
                </div>

                </div>



                <div className="konlar">
                    <Link href={'/yana/yanaikkita'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/yana_2_346_425_uz.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/yana/yanaikkita'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanaikkita'}><p className="title1"><b>10</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanaikkita'}><p className="title3"><b>20</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanaikkita'}><p className="title1"><b>1000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/yanaikkita'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                <div className="summa">
                    <Link className="title1" href={'/yana/yanaikkita'}><h1>37 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/yana/yanaikkita'}><h4 className="batafsil">Batafsil1</h4></Link>
                </div>

                </div>


                <div className="konlar">
                    <Link href={'/yana/bitta'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/yana_1_346_425_uz.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/yana/bitta'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/bitta'}><p className="title1"><b>5</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/bitta'}><p className="title3"><b>10</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/bitta'}><p className="title1"><b>1000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/yana/bitta'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                <div className="summa">
                    <Link className="title1" href={'/yana/bitta'}><h1>37 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/yana/bitta'}><h4 className="batafsil">Batafsil1</h4></Link>
                </div>

                </div>


            </div>

            <h1 className="status">STATUS</h1>


            <div className="kon">
            <div className="konlar">
                    <Link href={'/status/platinum'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/status_platinum_346_425_uz-1.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/status/platinum'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title1"><b>200</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title3"><b>400</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title1"><b>2000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                
                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title3"><b>100</b> daqiqa VEON hudida <br /> kirish/chiqish qo'ng'iroqlari </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title3"><b>500</b> MB roumingda VEON <br /> hududida foydalanish uchun </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title3"><b>100</b> daqiqa barcha xalqaro <br /> qo'ng'iroqlar uchun </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/simcard.svg" alt="" />
                    <Link className="title2" href={'/status/platinum'}><p className="title3"><b>1 500 000</b> so'm nominaldagi <br /> Oltin raqam </p></Link>
                </div>

                <div className="summa4">
                    <Link className="title1" href={'/status/platinum'}><h1>200 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/status/platinum'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>



                <div className="konlar">
                    <Link href={'/status/gold'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/status_gold_346_425_uz-1.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/status/gold'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title1"><b>100</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title3"><b>200</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title1"><b>2000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                
                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title3"><b>50</b> daqiqa VEON hudida <br /> kirish/chiqish qo'ng'iroqlari </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title3"><b>250</b> MB roumingda VEON <br /> hududida foydalanish uchun </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/discount.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title3"><b>50</b> % chegirma roumingda VEON <br /> hududida kiruvchi qo'ng'iroqlarga </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/simcard.svg" alt="" />
                    <Link className="title2" href={'/status/gold'}><p className="title3"><b>500</b> ming so'm nominaldagi 'Oltin' <br /> raqam </p></Link>
                </div>

                <div className="summa4">
                    <Link className="title1" href={'/status/gold'}><h1>140 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/status/gold'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>


                <div className="konlar">
                    <Link href={'/status/silver'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/status_silver_346_425_uz.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/status/silver'}><p className="title1">UZB bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title1"><b>50</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title3"><b>100</b> GB Telegram, Watssap, Viber <br /> va Youtube uchun</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title1"><b>1000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title3">Beeline TV: Telekanallar va <br /> Amediateka</p></Link>
                </div>

                
                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title3"><b>100</b> daqiqa VEON hudida <br /> kirish/chiqish qo'ng'iroqlari </p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title3"><b>100</b> MB roumingda VEON <br /> hududi uchun </p></Link>
                </div>  

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/simcard.svg" alt="" />
                    <Link className="title2" href={'/status/silver'}><p className="title3"><b>250</b> ming so'm nominaldagi 'Oltin' <br /> raqam </p></Link>
                </div>

                <div className="summa3">
                    <Link className="title1" href={'/status/silver'}><h1>100 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/status/silver'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>

            </div>

            <h1 className="zor">HAMMASI ZO'R</h1>


            <div className="kon">
            <div className="konlar">
                    <Link href={'/zor/zor1'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/02/hammasi-zor-1-uz1.jpg" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/zor/zor1'}><p className="title1"><b>1 500</b> daqiqa O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor1'}><p className="title1"><b>3</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/night.svg" alt="" />
                    <Link className="title2" href={'/zor/zor1'}><p className="title3"><b>9</b> GB, tungi bonus (01:00-08:00)</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor1'}><p className="title1"><b>500</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div className="summa5">
                    <Link className="title1" href={'/zor/zor1'}><h1>20 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/zor/zor1'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>


                <div className="konlar">
                    <Link href={'/zor/zor2'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/02/hammasi-zor2-uz1.jpg" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/zor/zor2'}><p className="title1"><b>2 500</b> daqiqa O'zbekiston bo'yicha</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor2'}><p className="title1"><b>5</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/night.svg" alt="" />
                    <Link className="title2" href={'/zor/zor2'}><p className="title3"><b>15</b> GB, tungi bonus (01:00-08:00)</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor2'}><p className="title1"><b>500</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor2'}><p className="title1">Beeline TV: Telekanallar</p></Link>
                </div>


                <div className="summa6">
                    <Link className="title1" href={'/zor/zor2'}><h1>30 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/zor/zor2'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>


                <div className="konlar">
                    <Link href={'/zor/zor3'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/hammasi-zor-3-uz-1.jpg" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/zor/zor3'}><p className="title1">O'zbekiston bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor3'}><p className="title1"><b>8</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/night.svg" alt="" />
                    <Link className="title2" href={'/zor/zor3'}><p className="title3"><b>24</b> GB, tungi bonus (01:00-08:00)</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor3'}><p className="title1"><b>1000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor3'}><p className="title1">Beeline TV: Telekanallar</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/beelinemusic.svg" alt="" />
                    <Link className="title2" href={'/zor/zor3'}><p className="title1">Beeline Music</p></Link>
                </div>


                <div className="summa7">
                    <Link className="title1" href={'/zor/zor3'}><h1>40 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/zor/zor3'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>


                <div className="konlar">
                    <Link href={'/zor/zor4'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/hammasi-zor-4-uz.jpg" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/zor/zor4'}><p className="title1">O'zbekiston bo'ylab cheksiz qo'ng'iroq</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor4'}><p className="title1"><b>15</b> GB barcha yo'nalishlarga</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/night.svg" alt="" />
                    <Link className="title2" href={'/zor/zor4'}><p className="title3"><b>45</b> GB, tungi bonus (01:00-08:00)</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor4'}><p className="title1"><b>500</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bilajn-tv-ikonka.svg" alt="" />
                    <Link className="title2" href={'/zor/zor4'}><p className="title1">Beeline TV: Telekanallar</p></Link>
                </div>

                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/beelinemusic.svg" alt="" />
                    <Link className="title2" href={'/zor/zor4'}><p className="title1">Beeline Music</p></Link>
                </div>


                <div className="summa7">
                    <Link className="title1" href={'/zor/zor4'}><h1>60 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/zor/zor4'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>

            </div>


            <h1 className="oson">OSON</h1>


            <div className="kon">
            <div className="konlar">
                    <Link href={'/oson/oson1'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/02/oson-10-uz-prevyu.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/oson/oson1'}><p className="title1"><b>500</b> daqiqa O'zbekiston bo'yicha</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/oson/oson1'}><p className="title1"><b>500</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/oson/oson1'}><p className="title1"><b>10</b> MB</p></Link>
                </div>


                <div className="summa7">
                    <Link className="title1" href={'/oson/oson1'}><h1>14 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/oson/oson1'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>


                <div className="konlar">
                    <Link href={'/oson/oson2'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/02/oson-1-uz-prevyu.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/oson/oson2'}><p className="title1"><b>500</b> daqiqa O'zbekiston bo'yicha</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/oson/oson2'}><p className="title1"><b>100</b> barcha yo'nalishlarga</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/oson/oson2'}><p className="title1"><b>5 000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div className="summa7">
                    <Link className="title1" href={'/oson/oson2'}><h1>45 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/oson/oson2'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>
            </div>


            <h1 className="boshqalar">BOSHQALAR</h1>


            <div className="kon01">
            <div className="konlar">
                    <Link href={'/boshqalar/bolajon'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/detskij__346_438_uz-4.png" alt="" /></Link>


                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/boshqalar/bolajon'}><p className="title1"><b>500</b> daqiqa tarmoq ichida chiqish <br /> qo'ng'iroqlari uchun</p></Link>
                </div>


                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                <Link className="title2" href={'/boshqalar/bolajon'}><p className="title1"><b>1 500</b> MB tarif bo'yicha kiritilgan <br /> to'plam</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                    <Link className="title2" href={'/boshqalar/bolajon'}><p className="title1"><b>125</b> so'm  boshqa tarmoqlarga <br /> chiqish qo'ng'iroqlari daqiqasiga</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/boshqalar/bolajon'}><p className="title1"><b>85</b> so'm O'zbekiston bo'yicha <br /> chiquvchi sms</p></Link>
                </div>


                <div className="summa7">
                    <Link className="title1" href={'/boshqalar/bolajon'}><h1>11 500 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/boshqalar/bolajon'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>



                <div className="konlar">
                    <Link href={'/boshqalar/uydagidek'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/uydagidek_210x210-1-1.png" alt="" /></Link>


                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/binaries/content/assets/js/nd/img/icons/params/global.svg" alt="" />
                <Link className="title2" href={'/boshqalar/uydagidek'}><p className="title1"><b>5 000</b> MB barcha yo'nalishlarga</p></Link>
                </div>


                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/boshqalar/uydagidek'}><p className="title1"><b>100</b> daq Barcha yo'nalishlarga</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/binaries/content/assets/js/nd/img/icons/params/global.svg" alt="" />
                    <Link className="title2" href={'/boshqalar/uydagidek'}><p className="title1"><b>2 000</b> MB barcha yo'nalishlarga</p></Link>
                </div>


                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/boshqalar/uydagidek'}><p className="title1"><b>2 000</b> daq O'zbekiston bo'yicha*</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/boshqalar/uydagidek'}><p className="title1"><b>200</b> so'm O'zbekiston bo'yicha <br /> sms paketi*</p></Link>
                </div>


                <div className="uydagidek">
                    <Link className="title1" href={'/boshqalar/uydagidek'}><h1>11 500 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/boshqalar/uydagidek'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>



                <div className="konlar">
                    <Link href={'/boshqalar/welcome'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/welcome-uz-prevyu-1.png" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/02/outcall.svg" alt="" />
                <Link className="title2" href={'/boshqalar/welcome'}><p className="title1"><b>1 000</b> daqiqa O'zbekiston bo'yicha*</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/boshqalar/welcome'}><p className="title1"><b>10 000</b> MB barcha yo'nalishlarga*</p></Link>
                </div>



                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/boshqalar/welcome'}><p className="title1"><b>1 000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div className="welcome">
                    <Link className="title1" href={'/boshqalar/welcome'}><h1>14 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/boshqalar/welcome'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>




                <div className="konlar">
                    <Link href={'/oson/zarqaynar'}><img className="yana-img" src="https://beeline.uz/wp-content/uploads/2023/03/zarqaynar-icon-346x425-1.jpg" alt="" /></Link>

                <div style={{display:'flex'}}>
                <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/bezlimit-znachok.svg" alt="" />
                <Link className="title2" href={'/oson/zarqaynar'}><p className="title1">O'zbekiston bo'ylab qo'ng'iroqlar</p></Link>
                </div>


                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/internet-ikonka.svg" alt="" />
                    <Link className="title2" href={'/oson/zarqaynar'}><p className="title1"><b>10</b> GB barcha yo'nalishlarga*</p></Link>
                </div>



                <div style={{display:'flex'}}>
                    <img className="cheksiz" src="https://beeline.uz/wp-content/uploads/2023/03/soobshhenie-ikonka.svg" alt="" />
                    <Link className="title2" href={'/oson/zarqaynar'}><p className="title1"><b>1 000</b> SMS O'zbekiston bo'yicha</p></Link>
                </div>


                <div className="zarqaynar">
                    <Link className="title1" href={'/oson/zarqaynar'}><h1>14 000 so'm</h1></Link>
                    <Link className="title1" style={{color:'blue'}} href={'/oson/zarqaynar'}><h4 className="batafsil">Batafsil</h4></Link>
                </div>

                </div>
            </div>


            <div className="arxiv">
                <button className="arxiv-btn"><b>TARIFLAR ARXIVI</b></button>
            </div>


        </>
        
    )
} 

export default Home