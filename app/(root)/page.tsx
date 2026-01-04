import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (
    <>
      {/* CTA SECTION */}
      <section className="card-cta flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Get Interview Ready with AI-Powered Practice & Feedback
          </h2>

          <p className="text-sm sm:text-base text-light-100">
            Practice real interview questions and get instant AI feedback
          </p>

          <Button asChild className="btn-primary w-full sm:w-fit">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="AI Interview Assistant"
          width={400}
          height={400}
          priority
          className="w-64 sm:w-80 lg:w-[400px] h-auto"
        />
      </section>

      {/* YOUR INTERVIEWS */}
      <section className="flex flex-col gap-6 mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Your Interviews
        </h2>

        <div className="interview-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      {/* TAKE AN INTERVIEW */}
      <section className="flex flex-col gap-6 mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Take an Interview
        </h2>

        <div className="interview-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
