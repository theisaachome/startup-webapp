"use client";
import CloseButton from "@/components/buttons/close-button";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default async function InterceptedImagePage({params}){
    const route = useRouter();
    const {slug} =await params;
    const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
    if (!newsItem) {
         notFound();
    }
    return (
      <>
        <div className="modal-backdrop" onClick={route.back}/>
        <dialog className="modal" open>
            <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
      </>
    );
}