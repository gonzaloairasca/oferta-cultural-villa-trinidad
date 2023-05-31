import Image from "next/image"
import { getLinks } from "../../page"



const page = async ({ params }: { params: { slug: string } }) => {

    const data = await getLinks()
    const item = data.find((item) => item.slug === params.slug)
    console.log(item)
    return (
        <div>
            <img src={item?.img} alt={item?.name} />
            <p>
                {item?.descriptionDetail}
            </p>
            {params.slug}
        </div>
    )
}

export default page