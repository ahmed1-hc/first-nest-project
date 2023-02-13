interface Address {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
}

export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'Male' | 'Female';
  email: string;
  phone: string;
  username: string;
  password: string;
  image: URL;
  address: Address;
}
