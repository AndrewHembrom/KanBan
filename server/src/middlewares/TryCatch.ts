import { Request, Response, NextFunction } from 'express'

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const TryCatch = (handler: Handler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (error){
            if (error instanceof Error) {
                res.status(500).json({
                    message: error.message
                })
            } else {
                res.status(500).json({
                    message: "AN unexpected error occurred."
                })
            }
        }
    };
};

export default TryCatch;