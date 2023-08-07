import axios, { AxiosResponse } from 'axios';

import { environment } from '../environments/environment';
import { Producer } from '../models/producer.model';


export async function sourceProducer(): Promise<AxiosResponse> {
  try {
    const response: AxiosResponse = await axios.get(environment.bloodTypeAPI);
    if (!isValidBloodTypeResponse(response.data)) {
      throw new Error('Invalid blood type response');
    }
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(`Error. ${error.message}`);
  }
}

export async function sendToSource(body: Producer) {
  try {
    return await axios.post(
      `${environment.sourceApi}ingest-data`,
      body,
      {
        headers: {
          'authorization': `Bearer ${environment.authSourceToken}`,
          'content-type': 'application/json',
        }
      });
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
}

function isValidBloodTypeResponse(data: Producer) {
  const schema: Producer = {
    id: 0,
    uid: 'a',
    type: 'b',
    rh_factor: 'c',
    group: 'd',
  };
  let errors: string[] = Object.keys({ ...schema }).filter((key: string) => {
    return !(key in data);
  });

  return errors.length === 0;
}
