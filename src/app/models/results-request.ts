export interface ResultsRequest<T> {
    isSuccess:boolean,
    statusCode:number,
    length:number,
    results:Array<T>
}
