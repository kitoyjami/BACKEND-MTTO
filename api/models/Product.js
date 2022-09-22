import mongoose from "mongoose"

/**
 * Cosas necesarias para crear un modelo
 * 1. schema
 * 2. nombre
 */

const schema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    equivalent_code: {
        type: String,
        required: true
    },
    use_state:{
        type: String,
        required: true
    },
    inspeccion: [
        {
            detail:  String,
            date: {
                type: Date,
                default: Date.now
            } 
        }
    ],
    image:{
        type: String,
        default: "https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
    }
})

export default mongoose.model("Product", schema)