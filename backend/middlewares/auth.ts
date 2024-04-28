import type { Request, Response, NextFunction} from "express"

import { COOKIE_NAME } from "../constants"

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies[COOKIE_NAME]
    if (!token) {
        res.status(401).send("Unauthorized")
        return
    }
}

