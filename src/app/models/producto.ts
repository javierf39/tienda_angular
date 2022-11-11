export class Producto{
    constructor(
        public id:number,
        public title:string,
        public description:string,
        public price:number,
        public stock:number,
        public category:string,
        public thumbnail:string,
        public quantity:number,
        public subTotal:number
    ){}
}