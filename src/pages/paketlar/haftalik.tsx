import Link from "next/link"



const Haftalik = () => {
    return(
        <>

        <div className="main">
            <h1>Тарифные планы</h1>
            
            <div className="main-buttons">
                <Link href={'/paketlar'}><button className="btn">Barcha</button></Link>
                <Link href={'/paketlar/kunlik'}><button className="btn">Kunlik</button></Link>
                <Link href={'/paketlar/haftalik'}><button className="btn">Haftalik</button></Link>
                <Link href={'/paketlar/oylik'}><button className="btn">Oylik</button></Link>
                <Link href={'/paketlar/tungi'}><button className="btn">Tungi</button></Link>
                <Link href={'/paketlar/internet'}><button className="btn">4G</button></Link>
            </div>
        </div>


        <h1 className="kunlik">Haftalik</h1>


    <div className="sotuv">
        <div className="paket1">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">3 GB <br /> <span>7-kunga</span> </h1>
        </div>

        <div className="som1">
            <h1>17 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">1.5 GB <br /> <span>7-kunga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">10 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">7 GB <br /> <span>7-kunga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">25 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>
</div>
        </>
    )
}

export default Haftalik