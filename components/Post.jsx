import Link from "next/link";
export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {":"}
      <Link href={`/posts/${post.id}`}>
        {/* <span className="cursor-pointer text-blue border-b border-blue-500 hover:bg-gray-200">
        </span> */}
        {post.title}
      </Link>
    </div>
  );
}
