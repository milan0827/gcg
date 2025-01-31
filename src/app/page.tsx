import CreateUpdateForm from "@/components/ui/createUpdateFom/CreateUpdateForm";
import Button from "@/components/ui/custom-button/custom-button";

interface POST {
  id: number;
  title: string;
  body: string;
}

const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  console.log("POSTS", posts);
  return (
    <div className="md:mx-24 mx-6">
      <CreateUpdateForm />
      <h2 className="text-2xl">POSTS LIST</h2>
      <ul>
        {posts.map((post: POST) => (
          <li key={post.id} className="mb-4">
            <div className="flex w-full items-center justify-between ">
              <h2 className="md:text-3xl text-lg">Title: {post.title}</h2>
              <Button postId={post.id} />
            </div>
            <p className="text-gray-400 ml-4">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const dynamic = "force-static";

// export async function getStaticProps() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const posts = await data.json();

//   console.log("POSTS", posts);

//   return { posts };
// }

export default page;
