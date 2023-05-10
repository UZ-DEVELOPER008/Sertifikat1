import Link from "next/link"

export default function Navbar(){
    return(
        <>
        <div className="header" style={{display:'flex'}}>
            <Link href={'/'} className="title" style={{marginLeft:'240px'}}>ТАРИФНЫЕ ПЛАНЫ</Link>
            <Link href={'/paketlar'} className="title" style={{marginLeft:'240px'}}>ИНТЕРНЕТ-ПАКЕТЫ</Link>
            <Link href={'/beeline'} className="title" style={{marginLeft:'240px'}}>BEELINE CLUB 2.0</Link>
        </div>
        <hr />

        <nav className="nav" style={{display:'flex', gap:'120px'}}>
            <h3 className="nav-title" style={{marginLeft:'50px'}}>BEELINE TV</h3>
            <h3 className="nav-title">BEELINE VISA</h3>
            <h3 className="nav-title">BEELINE MUSIC & RADIO</h3>
        </nav>
        </>
    )
}