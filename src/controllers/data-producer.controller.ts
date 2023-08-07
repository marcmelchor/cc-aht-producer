import { Request, Response } from 'express';
import { generateUsername } from 'unique-username-generator';

import { Producer } from '../models/producer.model';
import { sendToSource, sourceProducer } from '../services/source-producer.service';


export const dataProducer = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const response: any = await sourceProducer();
    const body: Producer = response.data;
    // In order to simulate that the response contains a username is appended via the method  `generateUsername`, it's
    // done this in order to mask this attribute in the `Data Governance` stage in the `MiniTransform` section.
    body['username'] = generateUsername();
    await sendToSource(body);
    // TODO: Send request to Source
    return res.send({message: body}).end();
  } catch (err: any) {
    return res.status(500).json({message: `Internal server error: ${err.message}`})
  }
}
