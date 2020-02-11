import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";


export default (req: Request, res: Response, next : NextFunction)=> {

    const authHeader = <String>req.get('Authorization');

    if(!authHeader) {
        req.isAuth = false;
        return next();
    }
    
    const token = authHeader.split(' ')[1];


    if(!token || token === ''){
        req.isAuth = false;
        return next();
    }

    let decodedToken : DecodeToken | any;
    
    try{
        decodedToken =  jwt.decode(token);   
    } catch (err){
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;        
        return next();
    }

    const { userId } : DecodeToken = decodedToken;

    req.isAuth = true;

    req.userId = userId;
  
    return next();
}

