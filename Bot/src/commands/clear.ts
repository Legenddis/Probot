// commands/clear.js

import { CustomClient } from "../types"; // Import CustomClient interface
import {
  Guild,
  GuildMember,
  Channel,
  User,
  CommandInteraction,
  Message,
  PermissionFlagsBits,
} from "discord.js";
module.exports = {
  data: {
    name: "clear",
    type: 1,
    description: "Cleans messages from a channel.",
    default_member_permissions: PermissionFlagsBits.ManageMessages.toString(),
    options: [
      {
        type: 4,
        name: "number_of_messages",
        description: "Number of messages to delete.",
        required: true,
        min_value: 1,
      },
      {
        type: 6,
        name: "filter_by_user",
        description: "Filter by user messages.",
      },
      {
        type: 8,
        name: "filter_by_role",
        description: "Filter by role messages.",
      },
      {
        type: 5,
        name: "filter_by_bots",
        description: "Filter by bots messages.",
      },
    ],
  },
  execute: async (
    client: CustomClient,
    interaction: CommandInteraction,
    message: Message,
    guild: Guild,
    member: GuildMember,
    user: User,
    channel: Channel,
    args: String[]
  ) => {
    return "Working on that command!";
  },
};
