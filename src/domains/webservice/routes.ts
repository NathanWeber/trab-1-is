import controller from './controller';

export default [{
  method: 'get',
  path: '/continents',
  handlers: [
    controller.listContinentsByCode,
  ],
  },{
    method: 'get',
    path: '/continents/JSON',
    handlers: [
      controller.listContinentsByCodeJSON,
    ],
  },{
    method: 'get',
    path: '/countrys',
    handlers: [
      controller.listContrysByCode,
    ],
  },{
    method: 'get',
    path: '/countrys/JSON',
    handlers: [
      controller.listContrysByCodeJSON,
    ],
  }];
