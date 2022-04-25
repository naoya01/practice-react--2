import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { UrlParameter } from "../UrlParameter";

export const page2routes = () => [
  {
    path: "/",
    exact: true,
    children: <Page2/>
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter/>
  }
];