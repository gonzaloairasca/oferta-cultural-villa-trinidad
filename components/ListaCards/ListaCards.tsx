/* eslint-disable @next/next/no-img-element */
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Data } from "@/types/data"
import Image from "next/image"
import Link from "next/link"



const ListaCards = ({ data }: { data: Data[] }) => {
    return (
        <div>
            {data.length ? (
                <div>
                    {data.map((item, index) => (
                        <Link key={index} href={`/ofer/${item.slug}`}>
                            <Card className="  mb-2 md:grid md:grid-cols-2 " >
                                {/* <Image
                                    src={item.img}
                                    alt="Picture of the author"
                                    width={500}
                                    height={600}
                                    className="rounded-t-lg md:col-auto md:row-span-2  md:rounded-l-lg md:rounded-r-none "
                                /> */}
                                <img src={item.img} alt={item.name}
                                    className=" min-h-[280px] rounded-t-lg object-cover  md:col-auto md:row-span-2 md:rounded-l-lg md:rounded-r-none "
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