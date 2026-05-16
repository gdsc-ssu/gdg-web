import Link from 'next/link'
import type { Metadata } from 'next'
import PageContainer from '@/app/components/common/PageContainer'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | GDGoC Soongsil',
  description: 'GDGoC Soongsil 멤버들의 이야기를 담은 블로그입니다.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <PageContainer>
      <p className="text-style-subTitle max-md:text-[32px]">Blog</p>
      <div className="w-full h-[20px]" />
      <p className="text-style-body14 text-neutral-grey text-center">
        GDGoC Soongsil 멤버들의 이야기를 담은 블로그입니다.
      </p>
      <div className="w-full h-[60px]" />

      {posts.length === 0 ? (
        <p className="text-neutral-grey text-style-body14">아직 게시글이 없습니다.</p>
      ) : (
        <ul className="w-full divide-y divide-neutral-light-grey">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="flex items-start justify-between gap-6 py-6 hover:opacity-70 transition-opacity">
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-secondary-pastel-blue text-primary-blue">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-style-subTitle20 text-neutral-black truncate">{post.title}</h2>
                  <p className="text-style-body14 text-neutral-grey line-clamp-1">{post.description}</p>
                  <span className="text-[12px] text-neutral-grey">{post.author}</span>
                </div>
                <span className="text-[12px] text-neutral-grey whitespace-nowrap shrink-0 mt-1">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="w-full h-[100px]" />
    </PageContainer>
  )
}
