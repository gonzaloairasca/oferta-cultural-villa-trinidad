import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

type Data = {
    id: number,
    type: string,
    name: string,
    date: string,
    description: string,
    descriptionDetail: string,
    adress: string,
    place: string,
    img: string
}

const ListaCards = ({ data }: { data: Data[] }) => {
    return (
        <div>
            {data.length ? (
                <div>
                    {data.map((item, index) => (
                        <Link key={index} href={`/${item.name}`}>
                            <Card className="  mb-2 md:grid md:grid-cols-2 " >
                                {/* <Image
                                    src={item.img}
                                    alt="Picture of the author"
                                    width={500}
                                    height={600}
                                    className="rounded-t-lg md:col-auto md:row-span-2  md:rounded-l-lg md:rounded-r-none "
                                /> */}
                                <img src={item.img} alt={item.name}

                                    className="rounded-t-lg md:col-auto md:row-span-2  md:rounded-l-lg md:rounded-r-none object-cover h-[300px]"
                                />
                                <CardHeader className="">
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="">
                                    <p>{item.date} - {item.place}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default ListaCards