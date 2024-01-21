import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'courier',
  connector: 'memory',
  localStorage: '',
  file: 'src/store/db.json'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CourierDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'courier';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.courier', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
