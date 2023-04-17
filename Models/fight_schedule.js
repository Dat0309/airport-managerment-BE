import mongoose from "mongoose";

const fightSceduleSchema = mongoose.Schema(
    {
        fight_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Fight",
        },
        terminal_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Terminal",
        },
        airplane_type_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "AirplanceType",
        },
    },
    {
        timestamps: true,
    }
);

const FightSchecule = mongoose.model("FightSchedule", fightSceduleSchema);

export default FightSchecule;