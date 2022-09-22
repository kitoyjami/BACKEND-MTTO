/**
 * 1. Un schema de joi
 * 2. Validar en un try catch 
*/
import joi from 'joi'

const createProductSchema = joi.object({
    // Campos a validar
       name: joi.string().required(),
       equivalent_code: joi.string().required(),
       use_state: joi.string(),
       inspeccion:  joi.array().items(
          
               {
                   detail : joi.string(),
                   date: joi.date()
               }
           
       ),
       image: joi.string(),
})


export default async(req, res, next) => {

        try{
            // TODO: Validacion
            await createProductSchema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.status(400).json({
                msg: 'Error de validación al registrar usuario',
                error
            })
        }
}