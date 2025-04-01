import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
    const links = getAvailableNewsYears();
  return (
    <header id="archive-header">
        <ul>
        {
        links.map((year) => (<li key={year}> 
        <Link href={`/archive/${year}`}>{year}</Link>
        </li>))
        }
          
        </ul>
    </header>
  );
}