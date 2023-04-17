import mongoose from "mongoose";

const airlinesSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Airlines = mongoose.model("Airlines", airlinesSchema);

export default Airlines;