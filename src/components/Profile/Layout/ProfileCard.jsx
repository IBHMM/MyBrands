import '../style/style.css'

function ProfileCard({service, setExit, setReferal}) {

    const HandleProfileClick = (e, name) => {
        if(name == "HESABDAN ÇIX") {
            setExit(true)
        }else if (name == "REFERRAL PROGRAMI") {
            setReferal(true)
        }else if (name == "TEZ-TEZ VERILEN SUALLAR") {
            window.location = '/profile/questions'
        }else if (name == "SEÇİLMİŞLƏR") {
            window.location = '/profile/liked'
        }else if (name == "ÜNVANLAR") {
            window.location = '/profile/address'
        }else if (name == "İSTIFADECI MELUMATLARI") {
            window.location = '/profile/userinfo';
        }
    }

    return (
        <section 
            className="animate flex flex-col w-[24%] h-[148px] items-center justify-center min-w-[150px] max-[780px]:w-[32%] max-[339px]:w-full max-[550px]:w-[49%] gap-[10px] cursor-pointer py-2 px-2 border my-3 transition-all duration-100 hover:bg-gray-200"
            onClick={e => HandleProfileClick(e, service.name)}
        >
            <img src={service.src} />
            <p className="text-[12px] font-semibold">{service.name}</p>
        </section>
    )
}


export default ProfileCard



