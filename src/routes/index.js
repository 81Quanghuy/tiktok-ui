//Layouts
import { HeaderOnly } from '~/components/Layouts';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Pulic Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: null },
  { path: '/search', component: Search, layout: HeaderOnly },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
