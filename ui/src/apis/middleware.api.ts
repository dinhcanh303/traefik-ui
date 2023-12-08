import { Middleware, Middlewares } from "../types/middleware.type"
import { Response } from "../types/response.type"
import http from "../utils/http"


export const getMiddlewares = (page: number | string, limit : number | string,signal?: AbortSignal) => {
    http.get<Response<Middlewares>>('/http/middlewares',{
        params: {
            _page: page,
            _limit: limit,
        },
        signal
    })
}
export const getMiddleware = (name:string) => http.get<Middleware>(`/http/middlewares/${name}`)
export const addMiddleware = (middleware: Middleware) => http.post<Middleware>(`/http/middlewares`,middleware)
export const updateMiddleware = (name: string,middleware: Middleware) => http.put<Middleware>(`/http/middlewares/${name}`,middleware)
export const deleteMiddleware = (name: string) => http.delete<{}>(`/http/middlewares/${name}`)