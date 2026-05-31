import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Features() {
  const props = [
    {
      title: "Secure Payments",
      desc: "Find trusted service professionals near you and book in minutes — no endless calls, no guesswork.",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-900">
          <path d="M4.16602 6.66675H4.99935M14.9993 13.3334H15.8327M11.666 10.0001C11.666 10.9206 10.9198 11.6667 9.99935 11.6667C9.07887 11.6667 8.33268 10.9206 8.33268 10.0001C8.33268 9.07961 9.07887 8.33341 9.99935 8.33341C10.9198 8.33341 11.666 9.07961 11.666 10.0001ZM1.66602 13.3334V6.66675C1.66602 5.28604 2.7853 4.16675 4.16602 4.16675H15.8327C17.2134 4.16675 18.3327 5.28604 18.3327 6.66675V13.3334C18.3327 14.7141 17.2134 15.8334 15.8327 15.8334H4.16602C2.7853 15.8334 1.66602 14.7141 1.66602 13.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Flexible Scheduling",
      desc: "Choose from a variety of time slots that fit your busy lifestyle and never miss an appointment.",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-900">
          <path d="M7.08398 16.6667H5.83398C4.45327 16.6667 3.33398 15.5474 3.33398 14.1667V6.66667C3.33398 5.28595 4.45327 4.16667 5.83398 4.16667H14.1673C15.548 4.16667 16.6673 5.28595 16.6673 6.66667V7.08333M6.66732 4.16667V2.5M13.334 4.16667V2.5M14.1673 12.5002V14.1665L15.4173 15.4169M12.5734 10.3182C14.6991 9.43767 17.1352 10.4474 18.0158 12.573C18.8963 14.6986 17.8866 17.1346 15.7609 18.0151C13.6352 18.8957 11.1991 17.886 10.3186 15.7604C9.4387 13.6354 10.4477 11.1987 12.5734 10.3182Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Expert Reviews",
      desc: "Read genuine reviews from previous clients to ensure you're making the best choice for your service needs.",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-900">
          <path d="M9.15957 2.19209C9.49715 1.49163 10.5042 1.49163 10.8417 2.19209L12.521 5.67644C12.6568 5.95834 12.9275 6.15305 13.2403 6.19387L17.1061 6.69842C17.8832 6.79985 18.1944 7.7481 17.6259 8.28243L14.7979 10.9404C14.5691 11.1555 14.4657 11.4705 14.5232 11.7776L15.2331 15.5738C15.3759 16.337 14.5612 16.923 13.8722 16.5528L10.4452 14.7112C10.1679 14.5622 9.83337 14.5622 9.55611 14.7112L6.12906 16.5528C5.44012 16.923 4.62544 16.337 4.76816 15.5738L5.47812 11.7776C5.53556 11.4705 5.43217 11.1555 5.20337 10.9404L2.37538 8.28243C1.80687 7.7481 2.11806 6.79985 2.8952 6.69842L6.76103 6.19387C7.07379 6.15305 7.34446 5.95834 7.48032 5.67644L9.15957 2.19209Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "24/7 Support",
      desc: "Access customer support any time of day for assistance with bookings, inquiries, or changes.",
      icon: (
        <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-900">
          <path d="M2.41667 6.58333V6.375C2.41667 3.2684 5.12161 0.75 8.45833 0.75C11.7951 0.75 14.5 3.2684 14.5 6.375V6.58333M8.45833 14.8274V16.1667H10.9583C13.0294 16.1667 14.7083 14.4877 14.7083 12.4167M2 6.58333H3.25V12H2C1.30964 12 0.75 11.4404 0.75 10.75V7.83333C0.75 7.14298 1.30964 6.58333 2 6.58333ZM13.6667 6.58333H14.9167C15.607 6.58333 16.1667 7.14298 16.1667 7.83333V10.75C16.1667 11.4404 15.607 12 14.9167 12H13.6667V6.58333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100 select-none">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {props.map((prop, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-gray-900 flex justify-start items-center">
                  {prop.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 tracking-[-0.01em]">
                  {prop.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-500">
                  {prop.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
