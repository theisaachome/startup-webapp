import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import { Suspense } from "react";

async function FilteredHeader({ year, month }) {

 const availableYears = await getAvailableNewsYears();
  let links = availableYears;

 if (
   (year && !availableYears.includes(year)) ||
   (month && !getAvailableNewsMonths(year).includes(month))
 ) {
   throw new Error("Invalid filter.");
 }

   if (year && !month) {
     links = getAvailableNewsMonths(year);
   }


  if (year && month) {
    links = [];
  }
  return (
    <header id="archive-header">
      <ul>
        {links.map((link) => {
          const href = year
            ? `/archive/${year}/${link}`
            : `/archive/${link}`;
          return (
            <li key={link}>
              <Link href={href}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );

}

async function FilteredNews({year,month}){
  let news;
  if(year && !month){
    news = await getNewsForYear(year);
  }else if(year && month){
    news = await getNewsForYearAndMonth(year,month);
  }  
    
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent; 
}
export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
    <Suspense fallback={<p>Loading filters...</p>}>
    <FilteredHeader year={selectedYear} month={selectedMonth} />
    </Suspense>
    <Suspense fallback={<p>Loading news...</p>}>
    <FilteredNews year={selectedYear} month={selectedMonth} />
    </Suspense>
    </>
  );
}
