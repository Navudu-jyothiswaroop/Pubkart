class ProductModel {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public isAvailable: boolean,
      public imageUrl:string,
      public likes:number
    ) {}
}

export default ProductModel;