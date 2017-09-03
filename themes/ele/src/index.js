import Vue from 'vue';

require('./styles/base.less');
require('./styles/markdown.less');
import post from 'component/Post/Post';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import app from './app';
import about from 'component/About/About';
import me from 'component/Me/Me';
import blog from 'component/Blog';
import Categories from 'component/Categories/Categories';
import Welcome from 'component/Welcome/Welcome';
import VueRouter from 'vue-router';
import Post from 'component/Post/Post';
import siteFooter from 'component/Footer';
import siteHeader from 'component/Header';
import ErrorFourOFour from 'component/Error/404';
import Archive from 'component/Archive/Archive';


const root = document.createElement('div');
root.setAttribute('id', 'app');
document.body.appendChild(root);


const BlogWrapper = {
  template: `
  <div class="blog">
    <site-header></site-header>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
  `
}

const routes = [
    { path: '/home', component: Welcome },
    { path: '/blog', component: BlogWrapper,
      children: [
        { path: 'posts', component: blog },
        { path: 'post/:post_id', component: Post },
        { path: 'category', component: Categories },
        { path: 'archive', component: Archive },
        { path: 'me', component: me },
        { path: 'about', component: about },
      ]
    },
    { path: "*", component: ErrorFourOFour },
    { path: '/404', component: ErrorFourOFour},
];

Vue.component('site-footer', siteFooter);
Vue.component('site-header', siteHeader);
Vue.component('icon', Icon);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(app),
});
