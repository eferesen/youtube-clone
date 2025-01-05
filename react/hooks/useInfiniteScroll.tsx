/*
* input threshold and loadMore
* output error and isloading
*/

/*
  State
  isLoading
  error
*/

import { useCallback, useEffect, useRef, useState } from "react";

type infiniteScrollOptions = {
  threshold?: number;
  loadMore: () => Promise<void>
}

type infiniteScrollReturn = {
  isLoading: boolean;
  error: Error | null;
}

const useInfiniteScroll = ({threshold = 50, loadMore}: infiniteScrollOptions):infiniteScrollReturn => {

  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadingRef = useRef(false)

  const handleScroll =  useCallback(async () => {

    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight

    const distanceFromBottom = scrollHeight - scrollTop - clientHeight

    if (distanceFromBottom < threshold && !loadingRef.current ){
      try{
        loadingRef.current  = true
        setIsloading(true)
        setError(null)
        await loadMore()
      }catch (error){
        setError(error instanceof Error ? error : new Error('Failed to load more items'))
      }
      finally{
        setIsloading(false)
        loadingRef.current = false
      }
    }
  }, [threshold, loadMore])
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return {isLoading, error}

}

export {useInfiniteScroll}