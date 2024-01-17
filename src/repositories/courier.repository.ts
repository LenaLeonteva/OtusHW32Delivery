import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CourierDataSource} from '../datasources';
import {Courier, CourierRelations} from '../models';

export class CourierRepository extends DefaultCrudRepository<
  Courier,
  typeof Courier.prototype.courier_id,
  CourierRelations
> {
  constructor(
    @inject('datasources.courier') dataSource: CourierDataSource,
  ) {
    super(Courier, dataSource);
  }
}
