export interface ResultsRequest<T> {
    isSucces:boolean,
    statusCode:number,
    length:number,
    results:Array<T>
}
