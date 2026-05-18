import { posts } from '@/generated/posts'

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags?: string[]
}

export function getAllPosts(): PostMeta[] {
  return posts.map(({ slug, meta }) => ({ slug, ...meta }) as PostMeta)
}

export function getPostBySlug(slug: string) {
  const post = posts.find((p) => p.slug === slug)
  if (!post) throw new Error(`Post not found: ${slug}`)
  return { meta: { slug, ...post.meta } as PostMeta, html: post.html }
}
