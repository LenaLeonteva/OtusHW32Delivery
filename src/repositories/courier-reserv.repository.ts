import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CourierDataSource} from '../datasources';
import {CourierReserv, CourierReservRelations} from '../models';

export class CourierReservRepository extends DefaultCrudRepository<
  CourierReserv,
  typeof CourierReserv.prototype.order_id,
  CourierReservRelations
> {
  constructor(
    @inject('datasources.courier') dataSource: CourierDataSource,
  ) {
    super(CourierReserv, dataSource);
  }
}
