import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - CourierReserv
 * CourierReserv
 */
@model({name: 'CourierReserv'})
export class CourierReserv {
  constructor(data?: Partial<CourierReserv>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  order_id?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
}})
  courier_id?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  date?: string;

}

export interface CourierReservRelations {
  // describe navigational properties here
}

export type CourierReservWithRelations = CourierReserv & CourierReservRelations;


