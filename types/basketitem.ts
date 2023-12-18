export type basketitem = {
  userId: string;
  image: string;
  name: string;

  size: string;

  price: {
    cost: number;
    currency: string;
  };
};
