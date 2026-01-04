import React from 'react'
import dayjs from 'dayjs'; //convert raw timestamps into readable date
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';


const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96 mb-3'>
      <div className='card-interview'>
        <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
          <p className='badge-text'>{normalizedType}</p>
        </div>

        <Image src={getRandomInterviewCover()} alt="cover image" width={90} height={90} className='rounded-full object-fit size-[90px]' />

        <h3 className='capitalize'>
          {role} Interview
        </h3>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-row gap-2'>
             <Image src="/calendar.svg" alt="techstack icon" width={22} height={22} />
             <p>{formattedDate}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Image src="/star.svg" alt="star" width={22} height={22} />
            <p>{feedback?.totalScore || '---'}/100</p>
          </div>
        </div>
        <p className='line-clamp-2'>
          {feedback?.finalAssessment || 'No feedback available yet. Complete the interview to receive detailed feedback on your performance.'}
        </p> 
         <div className='flex flex-row justify-between'>
        <DisplayTechIcons techStack={techstack} />

        <Button className='btn-primary'>
           <Link href={feedback?`/interview/${interviewId}/feedback`:`/interview/${interviewId}`}>{feedback ? "Check feedback" : "View Interview"}</Link>
        </Button>
      </div>
      </div>
    </div>
  )
}

export default InterviewCard