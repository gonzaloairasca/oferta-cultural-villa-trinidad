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

const ListaCards = () => {
    const event = [{ name: "pepito", fecha: "12-12-12" }, { name: "pepito", fecha: "12-12-12" }, { name: "pepito", fecha: "12-12-12" }]
    return (
        <div>
            {event.length ? (
                <div>
                    {event.map((evento, index) => (
                        <Link key={index} href={"/"}>
                            <Card className="mb-2" >
                                <Image
                                    src="https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    className="rounded-t-lg"
                                />
                                <CardHeader>
                                    <CardTitle>Taller de Guitarra</CardTitle>
                                    <CardDescription>¡Agarra tu guitarra y únete a nuestro taller de puro rock! Aquí aprenderás a rasgar acordes, hacer solos épicos y darle caña a tus canciones favoritas. No importa si eres un novato o un shredder experimentado, ¡nosotros te llevaremos al siguiente nivel! ¡Inscríbete ya y descubre el poder de las seis cuerdas!</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>18 de Octubre - Taller Comunal</p>
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