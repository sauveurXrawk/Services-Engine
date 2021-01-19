// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import paystackSDK from '../init'
import endpoints from './endpoints'

export default async (req, res) => {

    try{
        let data = req.body
        const response = await paystackSDK(req.method,endpoints.initialize,data);
        // var data = await getData("http://api.sauveur.cloud/data/home","GET",true)
        // console.log(data);
       res.statusCode = 200
       res.json(response)
    }catch{

        res.json({status:"error"})
    }


}
