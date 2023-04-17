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
    },
    {
        timestamps: true,
    }
);

const Fight = mongoose.model("Fight", fightSchema);
export default Fight;