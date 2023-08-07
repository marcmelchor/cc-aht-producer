import { Router } from 'express';

import { isAuthorized } from '../utils/middlewares';
import { dataProducer } from '../controllers/data-producer.controller';


const router: Router = Router();

router.post('/produce-data', isAuthorized, dataProducer);

export default router;
