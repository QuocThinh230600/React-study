import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Error from "../pages/Error";

import { HeaderOnly } from "../components/Layout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/search", component: Search },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/404", component: Error, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
