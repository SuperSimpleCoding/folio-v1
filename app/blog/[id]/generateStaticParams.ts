import { blogDetails } from "../../blog-section/blogDetails"

export function generateStaticParams() {
  return blogDetails.map((blog) => ({
    id: blog.id,
  }))
}