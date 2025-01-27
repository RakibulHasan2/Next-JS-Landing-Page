
import CreateContentSection3 from "./components/CreateContentSection3";
import ExcitingWrittenToolSection from "./components/ExcitingWrittenToolSection";
import MixlandSection from "./components/MixlandSection";
import Package from "./components/Package";
import WhatOurCustomerSay from "./components/WhatOurCustomerSay";
import WriteBetterTop from "./components/WriteBetterTop";


export default function Home() {
  return (
    <main className="">
      <WriteBetterTop />
      <CreateContentSection3 />

      <ExcitingWrittenToolSection />

      <MixlandSection />
      <WhatOurCustomerSay />
      <Package />


    </main>
  );
}
