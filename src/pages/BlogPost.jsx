import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import FooterCTA from '../components/FooterCTA';
import FooterLinks from '../components/FooterLinks';
import { sanity, urlFor } from '../lib/sanity';

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, category, excerpt, author, publishedAt, readTime, coverImage, body
}`;

function formatDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return '';
  }
}

const ptComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(1200).fit('max').url()}
        alt={value.alt || ''}
        className="w-full rounded-2xl my-8"
        draggable="false"
      />
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="font-heading font-semibold text-2xl text-gray-900 mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="font-heading font-semibold text-xl text-gray-900 mt-8 mb-3">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-2 border-[#0C9348] pl-5 my-6 text-gray-600 italic">{children}</blockquote>,
    normal: ({ children }) => <p className="font-body text-[15px] text-gray-600 leading-relaxed mb-5">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#0C9348] underline hover:no-underline">{children}</a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 space-y-2 mb-5 font-body text-[15px] text-gray-600">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 space-y-2 mb-5 font-body text-[15px] text-gray-600">{children}</ol>,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(undefined); // undefined = loading, null = not found
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  useEffect(() => {
    let on = true;
    sanity.fetch(POST_QUERY, { slug })
      .then((r) => { if (on) setPost(r || null); })
      .catch(() => { if (on) setPost(null); });
    return () => { on = false; };
  }, [slug]);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar variant="light" />

      <article className="max-w-[760px] mx-auto px-6 pt-32 md:pt-36 pb-16">
        <Link to="/blog" className="inline-flex items-center gap-2 font-body text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H1M7 1L1 6l6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ALL POSTS
        </Link>

        {post === undefined && (
          <p className="font-body text-sm text-gray-400">Loading…</p>
        )}

        {post === null && (
          <div>
            <h1 className="font-heading font-semibold text-3xl text-gray-900 mb-3">Post not found</h1>
            <p className="font-body text-sm text-gray-500">This post may have been moved or unpublished. <Link to="/blog" className="text-[#0C9348] underline">Back to the blog</Link>.</p>
          </div>
        )}

        {post && (
          <>
            {post.category && (
              <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-[#0C9348] mb-4 block">{post.category}</span>
            )}
            <h1 className="font-heading font-semibold text-3xl md:text-[44px] text-gray-900 leading-[1.1] tracking-[-0.02em] mb-4">{post.title}</h1>
            {post.excerpt && <p className="font-body text-base text-gray-500 mb-5">{post.excerpt}</p>}
            <div className="flex items-center gap-2 font-body text-[13px] text-gray-400 mb-8">
              <span>{post.author || 'Handi'}</span><span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
              {post.readTime && <><span>•</span><span>{post.readTime}</span></>}
            </div>

            {post.coverImage && (
              <img src={urlFor(post.coverImage).width(1200).height(630).fit('crop').url()} alt={post.title} className="w-full rounded-2xl mb-10" draggable="false" />
            )}

            {post.body && <PortableText value={post.body} components={ptComponents} />}
          </>
        )}
      </article>

      <Newsletter />
      <FooterCTA />
      <FooterLinks />
    </div>
  );
}
