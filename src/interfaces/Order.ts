// export interface Order {
//   address: string;
//   city_name: string;
//   created_at: string;
//   deadline_info: string;
//   delivery_method_id: number;
//   id: number;
//   order_status_id: number;
//   return_url: string;
//   shipping_value: string;
//   state_name: string;
//   store_id: number;
//   store_order_date: string; // date
//   store_order_id: number;
//   total_value: string; // float
//   tracking_code: string;
//   updated_at: string; // date
//   zip_code_from_id: number;
//   zip_code_to_id: number;
// }

export class Order {

  address: string;
  city_name: string;
  created_at: string;
  deadline_info: string;
  delivery_method_id: number;
  id: number;
  order_status_id: number;
  return_url: string;
  shipping_value: string;
  state_name: string;
  store_id: number;
  store_order_date: string; // date
  store_order_id: number;
  total_value: string; // float
  tracking_code: string;
  updated_at: string; // date
  zip_code_from_id: number;
  zip_code_to_id: number;

  constructor(
    obj: any
  ) {
    this.address = obj.address;
    this.city_name = obj.city_name;
    this.created_at = obj.created_at;
    this.deadline_info = obj.deadline_info;
    this.delivery_method_id = obj.delivery_method_id;
    this.order_status_id = obj.order_status_id;
    this.return_url = obj.return_url;
    this.shipping_value = obj.shipping_value;
    this.state_name = obj.state_name;
    this.store_id = obj.store_id;
    this.store_order_date = obj.store_order_date; // date
    this.store_order_id = obj.store_order_id;
    this.total_value = obj.total_value; // float
    this.tracking_code = obj.tracking_code;
    this.updated_at = obj.updated_at; // date
    this.zip_code_from_id = obj.zip_code_from_id;
    this.zip_code_to_id = obj.zip_code_to_id;
    console.log('construct Order');
  }

  public test() {
    return 'ok';
  }

}
