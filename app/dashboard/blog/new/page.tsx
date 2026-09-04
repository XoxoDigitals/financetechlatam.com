import { PostEditor } from "@/components/PostEditor";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="dash-h">New post</h1>
      <p className="dash-sub">Write EN + ES, set SEO fields, add FAQ, then schedule a go-live time.</p>
      <PostEditor />
    </div>
  );
}
