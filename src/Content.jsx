import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Post 1",
      body: "place holder",
      image: "https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg",
    },
    {
      id: 2,
      title: "Post 2",
      body: "place holder",
      image: "https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg",
    },
    {
      id: 3,
      title: "Post 3",
      body: "place holder",
      image: "https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
