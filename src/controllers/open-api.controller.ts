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
   @operation('get', '/courier/add', {
    operationId: 'getCourier',
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
    async getCourier(@requestBody({
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
    console.log("GET", _requestBody)
    const result = await this.courierRepo.findById(_requestBody.courier_id);
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
  let courierID: number;
    if (!_requestBody.courier_id) {
      const couriers=await this.courierRepo.find();
      if (!couriers.length) return this.response.status(404).send({error: "Error! The courier wasn't found"});
      const random=Math.floor(Math.random() * couriers.length);
      courierID=couriers[random].courier_id??-1;
      if (courierID<0) return this.response.status(404).send({error: "Error! The courier wasn't found"});
    } else {
      courierID=_requestBody.courier_id;
    }
    let courier=await this.courierRepo.findById(courierID);
    if (!courier) return this.response.status(404).send({
      error: "Error! The courier wasn't found"
    })
    _requestBody.courier_id=courierID;
    const result= await this.reservRepo.create(_requestBody);
    return result
  }

  
/**
   *
   *
   * @param _requestBody Created order object
   */
@operation('delete', '/courier/reserve', {
  operationId: 'deleteReserve',
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
  async deleteReserve(@requestBody({
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
    console.log(_requestBody)
    let reserve= await this.reservRepo.findById(_requestBody.order_id);
    console.log('DELETE');
    await this.reservRepo.delete(reserve);
    return 
  }

  /**
   *
   *
   * @param _requestBody Get order object
   */
@operation('get', '/courier/reserve', {
  operationId: 'getReserve',
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
  async getReserve(@requestBody({
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
    console.log('GET ',_requestBody)
    let reserve= await this.reservRepo.findById(_requestBody.order_id);
    return reserve
  }


}

