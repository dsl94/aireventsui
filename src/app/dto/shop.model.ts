export interface Item {
  id: number;
  title: string;
  availableSizes: string;
  availableGenders: string;
  image: string;
  price: number;
  available: boolean;
}

export interface Order {

  id: number;

  item: Item;

  user: User;

  selectedSize: string;

  selectedGender: string;

  quantity: number;

  createdAt: string;

  status: string;

}


export interface User {

  id: number;

  name: string;

  email: string;

  phone: string;

}

