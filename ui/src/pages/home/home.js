import { BasicLayout } from "@/layouts";
import { HomeComponente } from "@/components/Home";
import { Separator } from "@/components/Shared";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <BasicLayout>
      <HomeComponente.BannerLastGamePublished />
      <Separator height={100}/>
      </BasicLayout>
    </>
  );
}
