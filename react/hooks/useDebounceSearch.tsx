import { useEffect, useState } from "react";

type fetchData = {
  firstName: string;
  lastName:string
}

const mockData = [
  { firstName: 'John', lastName: 'Smith' },
  { firstName: 'Emma', lastName: 'Johnson' },
  { firstName: 'Michael', lastName: 'Williams' },
  { firstName: 'Sarah', lastName: 'Brown' },
  { firstName: 'David', lastName: 'Jones' }
]

const fetchData = async (timeInMs: number = 150): Promise<fetchData[]> =>  {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, timeInMs)
  })
}

const useDebounceSearch = (searchText: string, timeInMs: number = 500) => {
  // setup result useState
  const [results, setResults] = useState<fetchData[]>([])

  // Set up a useEffect
  useEffect(() => {
    if(!searchText || searchText.length < 2){
      setResults([])
      return
    }

    const timeOutId = setTimeout(async () => {
      const data = await fetchData()
      setResults(data)
    }, timeInMs)

    return () => clearTimeout(timeOutId)
  },[searchText, timeInMs])

  return results;

}

export {useDebounceSearch}




