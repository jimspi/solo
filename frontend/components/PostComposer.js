import { useState } from 'react';
import { api } from '../utils/api';

export default function PostComposer({ onPost }) {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [isPublic, setIsPublic] = useState(true);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    formData.append('isPublic', isPublic);
    if (file) formData.append('media', file);
    const res = await api.post('/posts', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    onPost(res.data);
    setContent('');
    setFile(null);
  };

  return (
    <form onSubmit={submit} className="p-4 bg-white rounded shadow mb-4">
      <textarea
        maxLength={280}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded mb-2"
      />
      <div className="flex items-center justify-between">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            className="mr-1"
          />
          Public
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Post
        </button>
      </div>
    </form>
  );
}
