import CustomModal from "@/components/ui/custom-modal/customModal";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const postId = (await params).postId;
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postData.json();

  console.log("DATA", post);
  console.log("PSOTID", postId);
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-lg">Title: {post.title}</h2>
      </div>
      <p className="text-gray-400 ml-4">{post.body}</p>
      <Link
        href={"/"}
        className="bg-blue-500 p-2 text-nowrap rounded-md text-white"
      >
        {" "}
        Back to Post list
      </Link>

      <div className="mt-10">
        <CustomModal />
      </div>
    </div>
  );
};

export default page;
