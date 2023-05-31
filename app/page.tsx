import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ListaCards from "@/components/ListaCards/ListaCards"
import Papa from "papaparse"
import { Data } from "@/types/data"
export const revalidate = 10; // revalidate this page
// https://docs.google.com/spreadsheets/d/e/2PACX-1vScyujdjzb2yFosntrUE5h6QPes-6n-UH89zXZLai_y5TqPpuUVRkwhtpojxaFOj9zdRKwhipYY6QJX/pub?output=csv
export async function getLinks() {
  const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vScyujdjzb2yFosntrUE5h6QPes-6n-UH89zXZLai_y5TqPpuUVRkwhtpojxaFOj9zdRKwhipYY6QJX/pub?output=csv")
  const data = await res.text()
  const parsed = await new Promise<Data[]>((resolve, reject) => {
    Papa.parse<Data>(data, {
      header: true, complete: (result) => resolve(result.data),
      error: reject
    })
  })
  return parsed
}


export default async function IndexPage() {
  const data = await getLinks()
  const events: Data[] = data.filter((event) => event.type === "event")
  const workshops = data.filter((workshop) => workshop.type === "workshop")
  const gastronomy = data.filter((gastronomy) => gastronomy.type === "gastronomy")

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex  max-w-[980px] flex-col items-start gap-2">
        <Tabs defaultValue="eventos" className="mx-auto w-full  md:max-w-[800px] ">
          <TabsList className="flex justify-around  ">
            <TabsTrigger value="eventos">Eventos</TabsTrigger>
            <TabsTrigger value="talleres">Talleres</TabsTrigger>
            <TabsTrigger value="gastronomia">Gastronomía</TabsTrigger>
          </TabsList>
          <TabsContent value="eventos">
            <ListaCards data={events} />
          </TabsContent>
          <TabsContent value="talleres">
            <ListaCards data={workshops} />
          </TabsContent>
          <TabsContent value="gastronomia">
            <ListaCards data={gastronomy} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
