import mongoose from "mongoose";

const airplaneTypeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const AirplaneType = mongoose.model("AirplanceType", airplaneTypeSchema);

export default AirplaneType;