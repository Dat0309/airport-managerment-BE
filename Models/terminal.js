import mongoose from "mongoose";

const terminalSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Terminal = mongoose.model("Terminal", terminalSchema);
export default Terminal;