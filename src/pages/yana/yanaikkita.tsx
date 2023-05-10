import Link from "next/link"


const Yanaikkita = () => {
    return(
        <>
             <div className="padding">
            <h1 className="yana-title">YANA to'rtta</h1>
            <img className="yana-img-4" src="https://beeline.uz/wp-content/uploads/2023/03/yana_2_1440_408.png" alt="" />
        </div>

        <div className="birga">
            <div className="tafsilot">
                <h1 className="tafsilot-title">Tarif tafsilotlari</h1>
                <p className="tafsilot-title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar *</p>
                <p className="tafsilot-title">Internet <span className="limit"><b>10</b>GB/oy</span> </p>
                <p className="tafsilot-title">Telegram, Whatsapp, Viber va YouTube <span className="limit1"><b>10</b>GB/oy</span></p>
                <p className="tafsilot-title">O'zbekiston bo'yicha SMS * <span className="limit2"><b>1 000</b>SMS/oy</span></p>
                <p className="tafsilot-title">Beeline TV: Telekanallar va Amediateka **</p>
                <p className="tafsilot-title">Ulanish kodi: *0*2#</p>
            </div>

            <div className="tarif">
                <p>Tarif</p>
                <h1>YANA uchta</h1>
                <div style={{display:'flex' , marginTop:'30px'}}><h1>50 000</h1><p style={{margin:'13px'}}>s'om/oy</p></div>
                <hr className="hr" />
                <Link href={'/menu/ikkitaMenu'}><button className="tarif-btn">Ulash</button></Link>
            </div>

        </div>
        </>
    )
}

export default Yanaikkita