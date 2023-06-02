/* eslint-disable @next/next/no-img-element */
import { getData } from "@/app/api/ofers"

const page = async ({ params }: { params: { slug: string } }) => {
    const { parsed } = await getData()
    const item = parsed.find((item) => item.slug === params.slug)
    const reformatedDate = (date: string) => {
        const fechaOriginal = new Date(date);
        const dia = fechaOriginal.getDate();
        const mes = fechaOriginal.getMonth() + 1; // Los meses comienzan desde 0, por lo que debemos sumar 1
        const anio = fechaOriginal.getFullYear() % 100; // Obtener los últimos dos dígitos del año
        const fechaFormateada = `${dia}/${mes}/${anio}`;
        return fechaFormateada
    }
    return (
        <div className="mx-auto mt-4 max-w-[780px] px-4 md:mt-16">
            <img src={item?.img} alt={item?.name} className="mx-auto" />
            <h1 className=" mt-4 text-2xl font-bold md:mt-8">{item?.name}</h1>
            <p className="my-4 md:my-8 ">
                {item?.descriptionDetail}
            </p>
            <h3 className="mb-4 font-bold ">Dirección: {item?.adress}</h3>
            <h3 className="mb-4 font-bold ">Fecha: {item !== undefined ? reformatedDate(item.date) : ""}</h3>
        </div>
    )
}

export default page