
// - Users : Users , add user
// - Categories
// - Word
// - Text : Texts, Responce
// - Video
// - Stats 

import { BiCategory, BiHome, BiStats } from "react-icons/bi"
import { BsWordpress } from "react-icons/bs"
import { FaUsers, FaVideoSlash } from "react-icons/fa"
import { MdTextSnippet } from "react-icons/md"
export const SIDENAV_ITEMS = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: BiHome,
      submenu: false,
    }, 
    {
        title: 'Users',
        path: '/dashboard/users',
        icon: FaUsers,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/dashboard/users' },
          { title: 'Add User', path: '/dashboard/users/addUser' },
        ],
      },
    {
      title: 'Categories',
      path: '/categories',
      icon: BiCategory,
      submenu: true,
      subMenuItems: [
        { title: 'All', path: '/dashboard/categories' },
        { title: 'Add category', path: '/dashboard/categories/addcategory' },
      ],
    }, 
    {
        title: 'Texts',
        path: '/texts',
        icon: MdTextSnippet,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/dashboard/texts' },
          { title: 'add Text', path: '/dashboard/texts/addtext' },
        ],
      },
      {
        title: 'Words',
        path: 'dashboard/words',
        icon: BsWordpress,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/dashboard/words' },
          { title: 'Add Word', path: '/dashboard/words/addword' },
        ],
      },
      {
        title: 'Videos',
        path: '/videos',
        icon: FaVideoSlash,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/dashboard/videos' },
          { title: 'add Video', path: '/dashboard/videos/addvideo' },
        ],
      }, 
      {
        title: 'Stats',
        path: '/stats',
        icon: BiStats,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/dashboard/stats' },
          { title: 'Consultation', path: '/dashboard/stats/consultation' },
        ],
      },
      
   
  


]