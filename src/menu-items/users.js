// assets
import { IconKey, IconUsers, IconList } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconUsers,
    IconList
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const users = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'workers-list',
            title: 'workers list',
            type: 'item',
            icon: icons.IconUsers,
            url: '/dash/workers'
        },
        {
            id: 'client-list',
            title: 'clients list',
            type: 'item',
            icon: icons.IconUsers,
            url: '/dash/clients'
        }
    ]
};

export default users;
