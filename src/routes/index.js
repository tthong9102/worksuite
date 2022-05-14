import Dashboard from '../pages/Dashboard';
import Clients from '../pages/Clients';
import Employees from '../pages/Employees';
import Events from '../pages/Events';
import Tickets from '../pages/Tickets';
import NoticeBoard from '../pages/NoticeBoard';
import Chat from '../pages/Chat';

// Router không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Dashboard },
    { path: '/clients', component: Clients },
    { path: '/employees', component: Employees },
    { path: '/events', component: Events },
    { path: '/tickets', component: Tickets },
    { path: '/notice', component: NoticeBoard },
    { path: '/chat', component: Chat }
]

// Router cần đăng nhập
const privateRoutes = [

]

export { publicRoutes, privateRoutes }