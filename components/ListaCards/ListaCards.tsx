/* eslint-disable @next/next/no-img-element */
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Data } from "@/types/data"
import Link from "next/link"

const ListaCards = ({ data }: { data: Data[] }) => {

    const compareDates = (date: string): boolean => {
        const today = new Date();
        const inputDateFormated = new Date(date);
        if (inputDateFormated > today) {
            return true;
        } else {
            return false;
        }
    }

    const reformatedDate = (date: string) => {
        // Fecha original en el formato "Sat Jun 23 1923 00:00:00 GMT-0400 (hora estándar de Argentina)"
        const fechaOriginal = new Date(date);
        // Obtener los componentes de la fecha
        const dia = fechaOriginal.getDate();
        const mes = fechaOriginal.getMonth() + 1; // Los meses comienzan desde 0, por lo que debemos sumar 1
        const anio = fechaOriginal.getFullYear() % 100; // Obtener los últimos dos dígitos del año
        // Formatear los componentes en el formato deseado "dd/mm/aa"
        const fechaFormateada = `${dia}/${mes}/${anio}`;
        return fechaFormateada
    }

    return (
        <div>
            {data.length ? (
                <div>
                    {data.map((item, index) => (
                        <Link key={index} href={`/ofer/${item.slug}`}>
                            <Card className="mb-2 md:grid md:grid-cols-2 ">
                                <img src={item.img} alt={item.name}
                                    className=" min-h-[280px] rounded-t-lg object-cover  md:col-auto md:row-span-2 md:rounded-l-lg md:rounded-r-none "
                                />
                                <CardHeader className="">
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="">
                                    <p>{reformatedDate(item.date)} - {item.place}</p>
                                    {compareDates(item.date) ? <h3>Todavía falta</h3> : <h3>Ya pasó</h3>}
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