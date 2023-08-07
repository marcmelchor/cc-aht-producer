import { Request, Response } from 'express';
import { generateUsername } from 'unique-username-generator';

import { sourceProducer } from './source-producer.controller';


export const produceData = async (_req: Request, res: Response): Promise<Response> => {
  const response: globalThis.Response = await sourceProducer();
  const body = await response.json().then((body => body));
  // body.append('hello', 'world');
  body['username'] = generateUsername();
  console.log('----', body)
  // TODO: Send request to Source
  if (response.status === 200) {
    return res.send({message: body}).end();
  } else {
    return res.status(400).send({message: body}).end();
  }
}
