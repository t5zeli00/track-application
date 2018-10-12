export class Track {
  _id?: string;
  item_name: string;
  parcel_type: string;
  name: string;
  address: string;
  email: string;
<<<<<<< HEAD
  status: {
    'proceed': false,
    'shipped': false,
    'lost': false,
    'delivered': false,
    'not_delivered': false
  }
=======
  status: string;
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
  phone: {
    mobile: string;
    work: string;
  }
}
