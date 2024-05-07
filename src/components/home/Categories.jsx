

function Categories({categories}) {
    return (
        <section className="relative flex justify-between items-center w-[80%] max-[1200px]:w-[90%] px-1 mt-[100px] max-[500px]:flex-col max-[500px]:gap-[20px]">
            {
                categories.map((category, index) => {
                    return (
                        <Category category={category} key={index} />
                    )
                })
            }
        </section>
    )
}



function Category({category}) {

    return (
        <section className="w-[30%] h-full flex items-center justify-center relative max-[500px]:w-full">
            <img src={category.image} alt="" className="w-full h-full"/>
            <button className="absolute bottom-[10px] w-[50%] min-[800px]:h-[40px] max-[800px]:h-[30px] bg-white max-[700px]:text-[14px]">
                {category.name}
            </button>
        </section>
    )
}


export default Categories