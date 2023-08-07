import { NextFunction, Request, Response } from 'express';

import { environment } from '../environments/environment';


export const isAuthorized = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const authHeaderToken: string | undefined = req.headers.authorization;
    const authSourceToken: string = `Bearer ${environment.authSourceToken}`;
    if (!authHeaderToken || authHeaderToken !== authSourceToken) {
      return res.status(403).json({message: 'Unauthorized to produce.'});
    }

    return next();
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
}
