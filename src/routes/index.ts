import { Router } from 'express';

import { isAuthorized } from '../utils/middlewares';
import { produceData } from '../controllers/produce-data.controller';


const router: Router = Router();

router.post('/produce-data', isAuthorized, produceData);

export default router;
