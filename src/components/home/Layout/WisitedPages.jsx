import { useSelector } from "react-redux"

function WisitedPages() {
    const pages = useSelector((state) => state.user.wisitedpages);

    let string = "";

    pages.forEach((page, index) => {
        string += page;
        if (index < pages.length - 1) {
            string += " > ";
        }
    }); 

    return (
        <section className="w-[80%] max-[1200px]:w-[90%] flex items-center justify-start border border-gray-100 px-3 py-2">
            <p className="text-[12px] text-gray-700">{string}</p>
        </section>
    )
}

export default WisitedPages;
