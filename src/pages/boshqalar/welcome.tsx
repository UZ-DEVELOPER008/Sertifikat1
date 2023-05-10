import Link from "next/link"



const Oson2 = () => {
    return(
        <>
            <div className="padding">
        <h1 className="yana-title">YANA to'rtta</h1>
        <img className="yana-img-4" src="https://beeline.uz/wp-content/uploads/2023/02/oson-1-1440_408_uz.png" alt="" />
    </div>

    <div className="birga">
        <div className="tafsilot">
            <h1 className="tafsilot-title">Tarif tafsilotlari</h1>
            <p className="tafsilot-title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar *</p>
            <p className="tafsilot-title">Internet <span className="limit9"><b>1 000</b>MB/oy</span> </p>
            <p className="tafsilot-title">O'zbekiston bo'yicha SMS * <span className="limit8"><b>500</b>sms/oy</span></p>
            <p className="tafsilot-title">O'zbekiston bo'yicha qo'ng'iroqlar <span className="limit6"><b>10</b>MB/oy</span></p>
            <p className="tafsilot-title">O'zbekiston bo'yicha SMS <span className="limit8"><b>100</b>so'm/sms</span> </p> 
            <p className="tafsilot-title">Ulanish kodi: *2*01#</p>
        </div>

        <div className="tarif">
            <p>Tarif</p>
            <h1>YANA uchta</h1>
            <div style={{display:'flex' , marginTop:'30px'}}><h1>45 000</h1><p style={{margin:'13px'}}>s'om/oy</p></div>
            <hr className="hr" />
            <Link href={'/menu/oson1Menu'}><button className="tarif-btn">Ulash</button></Link>
        </div>

    </div>
        </>
    )
}

export default Oson2