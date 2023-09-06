import Home from '../component/home';
import Detail from '../component/detail';
import Like from '../component/like';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
