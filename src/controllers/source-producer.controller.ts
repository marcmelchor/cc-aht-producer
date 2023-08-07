import { environment } from '../environments/environment';


export async function sourceProducer(): Promise<Response> {
  return await fetch(
    `${environment.bloodTypeAPI}`, {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET',
    }
  );
}
