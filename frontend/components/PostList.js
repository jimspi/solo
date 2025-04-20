export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white rounded mb-2 shadow">
          <p className="mb-2">{post.content}</p>
          {post.mediaUrl && (
            <div className="mb-2">
              {post.mediaUrl.match(/\.(mp4|webm)$/) ? (
                <video src={post.mediaUrl} controls className="w-full" />
              ) : (
                <img src={post.mediaUrl} alt="" className="w-full" />
              )}
            </div>
          )}
          <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
