import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import AnswerGenerator from "./views/AnswerGenerator";
import Debate from "./views/Debate";
import Promises from "./views/Promises";
import Frequent from "./views/Frequent";
import Bingo from "./views/Bingo";
import BingoAllowed from "./views/Bingo";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/main-page" />
  },
  {
    path: "/main-page",
    layout: DefaultLayout,
    component: AnswerGenerator
  },
  {
    path: "/debate",
    layout: DefaultLayout,
    component: Debate
  },
  {
    path: "/promises",
    layout: DefaultLayout,
    component: Promises
  },
  {
    path: "/elections-bingo",
    layout: DefaultLayout,
    component: Bingo
  },
  {
    path: "/roni-zaitsev-didnt-quit-he-was-fired",
    layout: DefaultLayout,
    component: BingoAllowed
  },
  {
    path: "/faq",
    layout: DefaultLayout,
    component: Frequent
  },
];
