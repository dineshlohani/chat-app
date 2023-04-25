const mongoose = require("mongoose")

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupchat: { Type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.type.Object,
            ref: "User",
        },
        ],
        latestMessage: {
            type: mongoose.Schema.type.ObjectId,
            ref: "Message",
        },

        groupAdmin: {
            type: mongoose.Schema.type.ObjectId,
            ref:"User",
        },
    },
    {
        timetamps: true,
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;