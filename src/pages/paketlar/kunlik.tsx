import Link from "next/link"


const Kunlik = () => {
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


            <h1 className="kunlik">Kunlik</h1>

            <div className="sotuv">
            <div className="paket1">
            <div className="left">
            <p className="int">Internet-paketlar</p>
            <h1 className="GB">4 GB <span>kun</span> </h1>
            </div>

            <div className="som1">
                <h1>10 000</h1>
                <h2 className="pul">so'm</h2>
                <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
            </div>
        </div>


        <div className="paket">
            <div className="left">
            <p className="int">Internet-paketlar</p>
            <h1 className="GB">0.5 GB <span>kun</span> </h1>
            </div>

            <div className="som">
                <h1 className="arzon">5 000</h1>
                <h2 className="pul">so'm</h2>
                <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
            </div>
        </div>


        <div className="paket">
            <div className="left">
            <p className="int">Internet-paketlar</p>
            <h1 className="GB">0.2 GB <span>kun</span> </h1>
            </div>

            <div className="som">
                <h1 className="arzon">3 000</h1>
                <h2 className="pul">so'm</h2>
                <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
            </div>
        </div>
            </div>

            <div className="paket2">
            <div className="left">
            <p className="int">Internet-paketlar</p>
            <h1 className="GB">100 MB <span>kun</span> </h1>
            </div>

            <div className="som">
                <h1 className="arzon">2 000</h1>
                <h2 className="pul">so'm</h2>
                <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
            </div>
        </div>
        </>
    )
}


export default Kunlik