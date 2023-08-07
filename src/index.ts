import { Application } from 'express';

import { environment } from './environments/environment';
import createServer from './utils/server';

const app: Application = createServer();
const PORT: number = environment.port;

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
