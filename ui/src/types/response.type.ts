export interface Response<T> {
    message: string,
    metadata: T,
    status : number | string
}