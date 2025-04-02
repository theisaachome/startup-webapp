import NewsList from "@/components/news-list";
import Link from "next/link";
const { DUMMY_NEWS } = require("@/dummy-news");

export default function NewsPage() {
    return (
      <>
        <h1>News Page</h1>
        <NewsList news={DUMMY_NEWS}/>
      </>
    );
}