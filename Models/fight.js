import mongoose from "mongoose";

const fightSchema = mongoose.Schema(
    {
        fight_no: {
            type: String,
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        to:{
            type: String,
            required: true,
        },
        departure: {
            type: Date,
            required: true,
        },
        arrival: {
            type: Date,
            required: true,
        },
        airline_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Airlines",
        },
        airline: {
            type: String,
            required: true,
        },
        terminal_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Terminal",
        },
        terminal: {
            type: String,
            required:true,
        },
        airplane_type_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "AirplanceType",
        },
        airplane_type:{
            type: String,
            required: true,
        },
        airline_img: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Fight = mongoose.model("Fight", fightSchema);
export default Fight;