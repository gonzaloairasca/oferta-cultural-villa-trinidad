import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ListaCards from "@/components/ListaCards/ListaCards"
export default function IndexPage() {
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
            <ListaCards />
          </TabsContent>
          <TabsContent value="talleres">
            <ListaCards />
          </TabsContent>
          <TabsContent value="gastronomia">
            <ListaCards />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
