import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePage from "./image/page";
const { DUMMY_NEWS } = require("@/dummy-news");

export default async function NewsPageDetails({ params }) {
  const {slug} =await params;
    const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  if (!newsItem) {
     notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
