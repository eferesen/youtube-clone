// @ts-nocheck
//@ts-ignore
import { useEffect, useState } from "react"


type apiData = {
  id: number,
  fruit: string
}
const data: apiData[] = [{ id: 1, fruit: 'apple' }, { id: 2, fruit: 'Appricot' }, { id: 3, fruit: 'blueberries' }, { id: 4, fruit: 'mango' }, { id: 5, fruit: 'guava' }]

const fetchData = (): Promise<apiData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}


const TypeAhead = () => {
  const [fruits, setFruits] = useState<apiData[] | null | undefined>(null)
  const [filteredfruits, setFilteredFruits] = useState<apiData[] | null | undefined>(null)
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    const getData = async () => {
      const fruit = await fetchData()
      setFruits(fruit)
    }
    getData()
  }, [])

  const filterData = () => {
    return fruits?.filter((fruit) => fruit.fruit.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
    const filtered = filterData()
    setFilteredFruits(filtered)
  }

  return (
    <>
      <div>
        {
          fruits?.map((fruit) => (
            <li key={fruit.id}>{fruit.fruit}</li>
          ))
        }
      </div>
      <div>
        <p>Search Text: {searchText}</p>
        <input type='text' placeholder="Enter Search" onChange={handleSearch} />
      </div>
      <div>
        {filteredfruits && filteredfruits?.length > 0 && (
          <>
            {
              filteredfruits?.map((fruit) => (
                <li key={fruit.id}>{fruit.fruit}</li>
              ))
            }
          </>)}
      </div>
    </>
  )
}


export {TypeAhead}