import * as dynamoose from "dynamoose";

const UserSchema = new dynamoose.Schema(
  {
    cognitoId: {
      type: String,
      hashKey: true,
    },
    name: {
      type: String,
      index: {
        name: "nameIndex",
        type: "global",
      },
    },
    email: {
      type: String,
      index: {
        name: "emailIndex",
        type: "global",
      },
    },
    avatar: { type: String },
    followers: { type: Number, default: 0 },
    following: { type: Array, default: [] },
    posts: { type: Number, default: 0 },
  },
  {
    saveUnknown: true,
  }
);

const userTable = process.env.USER_TABLE || "";
export const UserModel = dynamoose.model(userTable, UserSchema);