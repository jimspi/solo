import { useEffect, useState } from 'react';
import PostComposer from '../components/PostComposer';
import PostList from '../components/PostList';
import { api } from '../utils/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const load = async () => {
    const res = await api.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <PostComposer onPost={(p) => setPosts([p, ...posts])} />
      <PostList posts={posts} />
    </div>
  );
}
