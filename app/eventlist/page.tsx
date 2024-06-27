import HeaderComponent from "../ui/header";
import FooterComponent from "@/app/ui/footer";
import EventButtonComponent from "../ui/eventbutton";
import EventDetail2Component from "../ui/eventDetail2";
import { Suspense } from "react";
import { HeaderSkeleton } from "../ui/skeletons";

export default function EventList(
  {
    searchParams,
  }: {
    searchParams?: {
      key?: string;
      value?: string;
    };
  }
) {
  const key = searchParams?.key || '';
  const value = searchParams?.value || '';

  return (
    <main className="grid grid-rows-base-layout min-h-screen w-full pb-40 overflow-auto justify-items-center items-center mt-20">
        <Suspense fallback={<HeaderSkeleton />}>
            <HeaderComponent />
        </Suspense>
        {/* TODO マップ 絞り込み 一番下 */}
        <EventButtonComponent />
        <EventDetail2Component key={key} value={value} />
        <FooterComponent />
    </main>
  );
}
