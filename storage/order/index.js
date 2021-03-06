// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {create, read,update, remove, getAll } from '../init'





export default async (req, res, isHandler=true) => {

    let response = { status: "error" }

    
    let id = req.query.id;
    try {

        switch (req.method) {
            case "POST":
                response = await create(req.body,"sorsordo")
                break;
            case "GET":
                response = await read(id,"sorsordo")
                break;
            case "PUT":
                response = await update(req.body.data, req.body.id,"sorsordo")
                break;
            case "DELETE":
                response = await remove(req.body.id,"sorsordo")
                break;
            default:
                response = await getAll()
        }


        if(isHandler){
            res.json(response)
        }else{
            return response
        }
       

    } catch (err) {
        console.log(err)
        if(isHandler){
            res.json({msg:err})
        }else{
            return {msg:err}
        }

    }


}


