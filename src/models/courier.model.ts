import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Courier
 * Courier
 */
@model({name: 'Courier'})
export class Courier {
  constructor(data?: Partial<Courier>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
}})
  courier_id?: number;

}

export interface CourierRelations {
  // describe navigational properties here
}

export type CourierWithRelations = Courier & CourierRelations;


