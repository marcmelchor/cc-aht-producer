import axios, { AxiosResponse } from 'axios';

import { environment } from '../../environments/environment';
import { Producer } from '../../models/producer.model';
import { sendToSource, sourceProducer } from '../../services/source-producer.service';


describe('sourceProducerService', (): void => {
  it('should return a valid response when a valid blood type response is received from the API', async () => {
    const mockResponse: {data: Producer} = {
      data: {
        id: 1,
        uid: 'a',
        type: 'b',
        rh_factor: 'c',
        group: 'd'
      }
    };
    jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);
    const response: AxiosResponse = await sourceProducer();
    expect(response).toEqual(mockResponse);
  });

  it('should throw an error with message "Invalid blood type response" when the API response is missing one or more required properties', async () => {
    const mockResponse = {
      data: {
        id: 1,
        uid: 'a',
        type: 'b',
        rh_factor: 'c'
      }
    };
    jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);
    await expect(sourceProducer()).rejects.toThrow('Invalid blood type response');
  });

  it('should throw an error with message containing the original error message when an error occurs during the API request', async () => {
    const errorMessage = 'Error message';
    jest.spyOn(axios, 'get').mockRejectedValue(new Error(errorMessage));
    await expect(sourceProducer()).rejects.toThrow(`Error. ${errorMessage}`);
  });
});


describe('sendToSourceService', (): void => {
  it('should send data to source API with valid body and headers', async () => {
    const mockResponse = { data: { success: true } };
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse as AxiosResponse);
    const body = {
      id: 1,
      uid: '1234',
      type: 'A',
      rh_factor: '+',
      group: 'AB',
      username: 'user1'
    };
    const res: AxiosResponse = await sendToSource(body);
    expect(res).toEqual(mockResponse);
    expect(axios.post).toHaveBeenCalledWith(`${environment.sourceApi}ingest-data`, body, {
      headers: {
        'authorization': `Bearer ${environment.authSourceToken}`,
        'content-type': 'application/json',
      }
    });
  });

  it('should throw an error if there is an issue with the API call', async () => {
    const body = {
      id: 1,
      uid: '1234',
      type: 'A',
      rh_factor: '+',
      group: 'AB',
      username: 'user1'
    };
    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error('API is down'));
    await expect(sendToSource(body)).rejects.toThrow('Error: API is down');
  });
});