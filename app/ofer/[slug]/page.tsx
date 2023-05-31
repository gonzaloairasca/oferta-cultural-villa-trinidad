/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { getLinks } from "../../page"



const page = async ({ params }: { params: { slug: string } }) => {

    const data = await getLinks()
    const item = data.find((item) => item.slug === params.slug)
    console.log(params.slug)
    return (
        <div className="mx-auto mt-4 max-w-[780px] px-4 md:mt-16">
            <img src={item?.img} alt={item?.name} className="mx-auto" />
            <h1 className=" mt-4 text-2xl font-bold md:mt-8">{item?.name}</h1>
            <p className="my-4 md:my-8 ">
                {item?.descriptionDetail}
            </p>
            <h3 className="mb-4 font-bold ">Fecha: {item?.date}</h3>
        </div>
    )
}

export default page