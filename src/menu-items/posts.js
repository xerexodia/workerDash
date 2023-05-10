// assets
import { IconKey, IconUsers, IconList } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconUsers,
    IconList
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const posts = {
    id: 'posts',
    title: 'Posts',
    type: 'group',
    children: [
        {
            id: 'posts',
            title: 'posts',
            type: 'item',
            icon: icons.IconList,
            url: '/dash/posts'
        },
        {
            id: 'material-post',
            title: 'material posts',
            type: 'item',
            icon: icons.IconList,
            url: '/dash/material-posts'
        }
    ]
};

export default posts;
