import { Link  } from "react-router-dom"

function Header() {
    return (
        <section className="flex w-[80%] items-center justify-between fixed top-0 bg-[#FAFAFA] max-[1200px]:w-full font-normal px-1">
            <div className="flex items-center justify-start gap-[10px] text-[12px]">
                <Link href="/home/about">Haqqimizda</Link>
                <Link href="">Musteri xidmetleri</Link>
                <Link href="">Bloq</Link>
            </div>
            <div className="text-[12px] max-[900px]:hidden mr-[10%]">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </p>
            </div>
            <div className="flex itemc-center justify-end">
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