import { useSearchParams } from "react-router-dom"

export const useParamsString = () => {
    const [searchParams] = useSearchParams()
    const searchParamsObject = Object.fromEntries([...searchParams])
    return searchParamsObject
}