import Papa from "papaparse"

import { Data } from "@/types/data"

export async function getData() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vScyujdjzb2yFosntrUE5h6QPes-6n-UH89zXZLai_y5TqPpuUVRkwhtpojxaFOj9zdRKwhipYY6QJX/pub?output=csv"
  )
  const data = await res.text()
  const parsed = await new Promise<Data[]>((resolve, reject) => {
    Papa.parse<Data>(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: reject,
    })
  })
  const events: Data[] = parsed.filter((event) => event.type === "event")
  const workshops = parsed.filter((workshop) => workshop.type === "workshop")
  const gastronomy = parsed.filter(
    (gastronomy) => gastronomy.type === "gastronomy"
  )

  events.forEach((item) => {
    const [day, month, year] = item.date.split("/")
    item.date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    ).toString()
  })

  events.filter((item) => new Date(item.date) > new Date())
  console.log(events)
  events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  workshops.forEach((item) => {
    const [day, month, year] = item.date.split("/")
    item.date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    ).toString()
  })
  workshops.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  gastronomy.forEach((item) => {
    const [day, month, year] = item.date.split("/")
    item.date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    ).toString()
  })
  gastronomy.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return { events, workshops, gastronomy, parsed }
}
