import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Image from 'next/image';

function BlogPost({ content, data }) {
  return (
    <div>
      <Navbar />
      <Hero
        subheading={data.subheading}
        heading={data.heading} />
      <div className='wisata max-w-2xl mx-auto mb-12 p-4'>
        <Image 
          className='mb-12'
          src={`/${data.cover}`}
          width={1024}
          height={512} />
        <div 
          dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'content/wisata');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), 'content/wisata', `${params.slug}.md`);
  const fileContent = fs.readFileSync(postFilePath, 'utf8');
  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(gfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      content: contentHtml,
      data,
      params
    },
  };
}

export default BlogPost;
