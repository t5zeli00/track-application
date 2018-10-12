export class Track {
  _id?: string;
  item_name: string;
  parcel_type: string;
  name: string;
  address: string;
  postcode: string;
  email: string;
  status: {
    'proceed': false,
    'shipped': false,
    'lost': false,
    'delivered': false,
    'not_delivered': false
  }
  phone: {
    mobile: string;
    work: string;
  }
}
