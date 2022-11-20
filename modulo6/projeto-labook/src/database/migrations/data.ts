import { ILikeDB, IPostDB } from "../../models/Post";
import { IUserDB, USER_ROLES } from "../../models/User";

export const users: IUserDB[] = [
  {
    id: "101",
    name: "Giulia",
    email: "giulia@gmail.com",
    password: "$2adsasf$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
    role: USER_ROLES.ADMIN,
  },
  {
    id: "102",
    name: "Fabi",
    email: "fabii@gmail.com",
    password: "$2aasddegtvzcddcamkcO",
    role: USER_ROLES.NORMAL,
  },
  {
    id: "103",
    name: "Giovanna",
    email: "gio@gmail.com",
    password: "$2a$1jryhsvsfYGu/i",
    role: USER_ROLES.NORMAL,
  },
];

export const posts: IPostDB[] = [
  {
    id: "201",
    content: "Hello, I'm new here!",
    user_id: "101",
  },
  {
    id: "202",
    content: "Good evening, friends!",
    user_id: "102",
  },
  {
    id: "203",
    content: "Not received!",
    user_id: "103",
  },
];

export const likes: ILikeDB[] = [
  {
    id: "301",
    post_id: "201",
    user_id: "101",
  },
  {
    id: "302",
    post_id: "202",
    user_id: "101",
  },
  {
    id: "303",
    post_id: "203",
    user_id: "101",
  },
  {
    id: "304",
    post_id: "201",
    user_id: "102",
  },
  {
    id: "305",
    post_id: "201",
    user_id: "103",
  },
  {
    id: "306",
    post_id: "202",
    user_id: "103",
  },
];