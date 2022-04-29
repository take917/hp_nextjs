import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";
export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul>
        {" "}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return { props: { posts } };
}
