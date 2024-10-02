import { SetupDetailComponent } from "@/components/setup-detail";
export default function SetupDetailPage({ params }) {
  return <SetupDetailComponent category={decodeURIComponent(params.category)} />;
}