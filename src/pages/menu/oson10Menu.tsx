import Link from "next/link"



const oson10Menu = () => {
    return(
        <>
    <div className='off'>
        <div className='on'>
            <img className='on-img' src="https://beeline.uz/wp-content/themes/new-theme/assets/img/icons/main-logo.svg" alt="" />
            <h3 className='on-title'>SMS orqali kirish</h3>
            <p className='on-number'>Telefon raqami</p>
            <input className='input' type="call" />
            <button className='on-btn'>DAVOM ETISH</button>
            <Link className='back' href={'/oson/oson1'}><span>Go back</span></Link>
        </div>
    </div>
        </>
    )
}

export default oson10Menu