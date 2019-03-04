import Vue from "vue";
import Router from "vue-router";
import HomeMap from "components/HomeMap";
import Login from "components/login";
import Home from "components/Home";
import WorldMap from "components/WorldMap";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "/", // 默认进入路由
      redirect: "/home", //重定向
    },
    {
      path: "/HomeMap",
      name: "HomeMap",
      component: HomeMap,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/WorldMap",
      name: "WorldMap",
      component: WorldMap,
    },
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log(to.name);
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ["login", "home", "HomeMap", "detail"];
  let isLogin = localStorage.getItem("token");
  console.log(isLogin);
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0 && !isLogin) {
    next({
      path: "/login",
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === "login") {
    if (isLogin) {
      console.log("已登录");
      router.push({ path: "/home" });
    }
  }
});
export default router;
