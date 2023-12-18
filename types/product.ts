export type product = {
    _id: string,
    name: string,
  
    images: string[],
    price: {
        cost: number,
        currency: string,
    },
    description: string,
    
    sizes: string[],
    materials: string[],
    skill: string,
    techniques: string[]

    patternType:string,
  
  };