import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
    id: '1',
    user: {
      username: 'Ruffles',
      avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740',
    },
    media: [
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '2',
    user: {
      username: 'John',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png',
    },
    media: [
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '3',
    user: {
      username: 'Doe John',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/027/312/306/small/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png',
    },
    media: [
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '4',
    user: {
      username: 'Chris',
      avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740',
    },
    media: [
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '5',
    user: {
      username: 'Martin',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/027/312/306/small/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png',
    },
    media: [
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  ],
  store: [
  {
    id: '1',
    username: 'sabrank...',
    avatar: 'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
    isViewed: false,
  },
 {
    id: '2',
    username: 'John',
    avatar: 'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
    isViewed: false,
  },
  {
    id: '3',
    username: 'Doe John',
    avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740',
    isViewed: true,
  },
  {
    id: '4',
    username: 'Martin',
    avatar: 'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
    isViewed: true,
  },
  {
    id: '5',
    username: 'Wolf',
    avatar: 'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
    isViewed: true,
  },
],
  profile:{
  id: '1',
  username: 'MonNom',
  displayName: 'MonIdentifiant',
  avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  bio: 'La description de mon profil',
  stats: {
    posts: 153,
    followers: 209,
    following: 109,
  },
  mediaGrid: [
    'https://picsum.photos/id/1011/300/300',
    'https://picsum.photos/id/1012/300/300',
    'https://picsum.photos/id/1013/300/300',
    'https://picsum.photos/id/1014/300/300',
    'https://picsum.photos/id/1015/300/300',
    'https://picsum.photos/id/1016/300/300',
    'https://picsum.photos/id/1017/300/300',
    'https://picsum.photos/id/1018/300/300',
    'https://picsum.photos/id/1019/300/300',
  ],
},
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setStore: (state, action) => {
      state.store = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPosts, setStore, setProfile, setLoading } = dataSlice.actions;

export default dataSlice.reducer;
