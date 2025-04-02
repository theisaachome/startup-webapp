import ModalBackDrop from "@/components/buttons/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({params}){
    const {slug} =await params;
    const newsItem = await getNewsItem(slug);
    if (!newsItem) {
         notFound();
    }
    return (
      <>
        <ModalBackDrop />
        <dialog className="modal" open>
            <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
      </>
    );
}