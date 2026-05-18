import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import PageContainer from '@/app/components/common/PageContainer'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getPostBySlug(slug)
    return { title: `${meta.title} | GDGoC Soongsil`, description: meta.description }
  } catch {
    return {}
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const { meta, html } = post

  return (
    <PageContainer>
      <div className="w-full max-w-[800px]">
        {meta.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-secondary-pastel-blue text-primary-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-style-subTitle text-neutral-black">{meta.title}</h1>

        <div className="flex items-center gap-4 mt-4 text-[14px] text-neutral-grey">
          <span>{meta.author}</span>
          <span>·</span>
          <span>{meta.date}</span>
        </div>

        <hr className="my-8 border-neutral-light-grey" />

        <div
          className="prose prose-neutral max-w-none
            prose-headings:font-bold prose-headings:text-neutral-black prose-headings:tracking-tight
            prose-h1:text-[32px] prose-h2:text-[24px] prose-h3:text-[20px]
            prose-p:text-[15px] prose-p:leading-[180%] prose-p:text-neutral-black
            prose-li:text-[15px] prose-li:leading-[180%] prose-li:text-neutral-black
            prose-strong:text-neutral-black
            prose-a:text-primary-blue prose-a:underline
            prose-code:bg-neutral-off-white prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px]
            prose-pre:bg-neutral-off-white prose-pre:rounded-xl prose-pre:p-4
          "
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="w-full h-[60px]" />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-style-body14 text-neutral-grey hover:text-neutral-black transition-colors"
        >
          ← 블로그 목록으로
        </Link>
      </div>

      <div className="w-full h-[100px]" />
    </PageContainer>
  )
}
