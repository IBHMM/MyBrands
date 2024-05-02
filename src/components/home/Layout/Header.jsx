

function Header() {
    return (
        <section className="flex w-[80%] items-center justify-between bg-[#FAFAFA] max-[1200px]:w-full font-normal px-2">
            <div className="flex items-center justify-start gap-[10px] text-[12px] flex-1">
                <a href="/haqqimizda">Haqqimizda</a>
                <a href="musterixidmetleri">Musteri xidmetleri</a>
                <a href="bloq">Bloq</a>
            </div>
            <div className="text-[12px] flex-2 max-[900px]:hidden">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </p>
            </div>
            <div className="flex-1 flex itemc-center justify-end">
                <select name="" id="" className="focus:outline-none text-[12px]">
                    <option value="AZ">AZ</option>
                    <option value="AZ">EN</option>
                    <option value="AZ">RU</option>
                </select>
            </div>
        </section>
    )
}

export default Header