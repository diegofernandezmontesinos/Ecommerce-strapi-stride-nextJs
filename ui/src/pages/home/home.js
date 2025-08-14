import { BasicLayout } from "@/layouts";
import { HomeComponente } from "@/components/Home";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <BasicLayout>
      <HomeComponente.BannerLastGamePublished />
      </BasicLayout>
    </>
  );
}
