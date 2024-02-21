import React from "react";

import AddQuizGroups from "@/components/AddQuiz/AddQuizGroups";
import Prizes from "@/components/AddQuiz/Prizes";
import SponsorEntry from "@/components/AddQuiz/SponsorEntry";
import Sponsors from "@/components/AddQuiz/Sponsors";
import AddSponsors from "@/components/AddQuiz/AddSponsors";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-row mdh:p-14 p-8 h-full space-x-8 w-full">
      <Link href="/dashboard" className="absolute left-[7vw] top-[4vh] ">
        <Image src="/images/quit.png" alt="profile" width={100} height={100} />
      </Link>
      <Link href="/dashboard" className="absolute left-[85vw] top-[8vh] ">
        <Image src="/images/yayımla.png" alt="profile" width={74} height={74} />
      </Link>
      <div className=" h-full w-[48vw] flex flex-col space-y-3  overflow-y-auto">
        <AddQuizGroups />
      </div>
      <div className=" flex flex-col  h-full w-[52vw]  space-y-3  overflow-y-auto">
        <AddSponsors />
        {/* sağ blok kodları */}
      </div>
    </div>
  );
}
