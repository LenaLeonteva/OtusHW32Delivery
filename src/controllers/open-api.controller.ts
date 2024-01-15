import {api, operation, param, requestBody} from '@loopback/rest';
import {Courier} from '../models/courier.model';
import {CourierReserv} from '../models/courier-reserv.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      Courier: {
        type: 'object',
        properties: {
          courier_id: {
            type: 'integer',
          },
        },
      },
      CourierReserv: {
        type: 'object',
        properties: {
          order_id: {
            type: 'string',
          },
          courier_id: {
            type: 'integer',
          },
          date: {
            type: 'string',
          },
        },
      },
    },
  },
  paths: {},
})
export class OpenApiController {
    constructor() {} 
  /**
   *
   *
   * @param _requestBody Created order object
   */
  @operation('post', '/courier/add', {
  operationId: 'addCourier',
  responses: {
    '200': {
      description: 'OK',
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Courier',
        },
      },
    },
    description: 'Created order object',
    required: true,
  },
})
  async addCourier(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Courier',
      },
    },
  },
  description: 'Created order object',
  required: true,
}) _requestBody: Courier): Promise<unknown> {
     throw new Error('Not implemented'); 
  }
  /**
   *
   *
   * @param _requestBody Created order object
   */
  @operation('post', '/courier/reserve', {
  operationId: 'reserveCourier',
  description: '',
  parameters: [],
  responses: {
    '200': {
      description: 'OK',
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/CourierReserv',
        },
      },
    },
    description: 'Created order object',
    required: true,
  },
})
  async reserveCourier(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/CourierReserv',
      },
    },
  },
  description: 'Created order object',
  required: true,
}) _requestBody: CourierReserv): Promise<unknown> {
     throw new Error('Not implemented'); 
  }
}

