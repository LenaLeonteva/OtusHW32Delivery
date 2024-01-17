import {Response, RestBindings, api, operation, param, requestBody} from '@loopback/rest';
import {Courier} from '../models/courier.model';
import {CourierReserv} from '../models/courier-reserv.model';
import { repository } from '@loopback/repository';
import { CourierRepository, CourierReservRepository } from '../repositories';
import { randomInt } from 'crypto';
import { inject } from '@loopback/core';

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
            type: 'number',
          },
          name: {
            type: 'string',
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
            type: 'number',
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
    constructor(
      @repository(CourierRepository) private courierRepo: CourierRepository,
      @repository(CourierReservRepository) private reservRepo: CourierReservRepository,
      @inject(RestBindings.Http.RESPONSE) private response: Response,
    ) {} 
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
  console.log("ADD", _requestBody)
  const result = await this.courierRepo.create(_requestBody);
  return result
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
    let courier=await this.courierRepo.findById(_requestBody.courier_id);
    if (!courier) return this.response.status(404).send({
      error: "Error! The courier wasn't found"
    })
     const result= await this.reservRepo.create(_requestBody);
     return result
  }
}

