import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Courier
 * Courier
 */
@model({name: 'Courier'})
export class Courier extends Entity {
  constructor(data?: Partial<Courier>) {
    super(data);
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property( {
  id: true,
  generated: true,
  type: 'number',
  format: 'int32',
})
  courier_id?: number;

  /**
   *
   */
  @property({
  type: 'string',
})
  name: string;

}

export interface CourierRelations {
  // describe navigational properties here
}

export type CourierWithRelations = Courier & CourierRelations;


