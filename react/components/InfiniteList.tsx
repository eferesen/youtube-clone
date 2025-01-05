import { useState } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const generateList = () => {
  return Array.from({ length: 2500 }, (_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`
  }))
}

const itemsList = generateList()

const getIncrementalData = async (previous: number, current: number): Promise<Item[]> => {
  console.log('fetching data')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsList.slice(previous, current))
    }, 10)
  })
}

type Item = {
  id: number;
  title: string
}

const InfiniteList = () => {

  const pageIncrement = 60

  const [page, setPage] = useState(pageIncrement)
  const [items, setItems] = useState<Item[]>(itemsList.slice(0, page))

  const loadMoreItem = async () => {
    console.log('Loading More Called')
    const data = await getIncrementalData(page, page + pageIncrement)
    setItems(prev => [...prev, ...data])
    setPage(prev => prev + pageIncrement)
  }

  const { isLoading, error } = useInfiniteScroll({ loadMore: loadMoreItem, threshold: pageIncrement })

  return (
    <>
      Hello
      {items.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}

      {isLoading && <div>Loading</div>}
      {error && <div>There was an error: {error.message}</div>}
    </>
  )

}

export { InfiniteList }