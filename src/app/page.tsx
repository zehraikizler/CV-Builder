"use client";
import Header from "@/components/layout/Header";
// import MainLayout from "@/components/layout/MainLayout";
// import RichTextEditor from "@/components/layout/RichTextEditor";
import { useCv } from "@/context/CvContext";

export default function Home() {
  const cvdata = useCv();

  console.log(cvdata);
  return (
    <div className="font-sans min-h-screen ">
      <Header />
      {/* <MainLayout /> */}
      {/* <RichTextEditor /> */}
    </div>
  );
}
