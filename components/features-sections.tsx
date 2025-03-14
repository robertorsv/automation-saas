'use client';

import { Calendar, MessageSquare, Bell, BarChart, Search, Activity, CheckSquare, MessageCircle, Bell as BellIcon, Award, CreditCard } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";
import { translations } from "@/app/translations";

export function FeaturesSections() {
  const { language } = useLanguage();
  const t = translations[language];

  const beforeVisitFeatures = [
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: t.onlineScheduling,
      description: t.onlineSchedulingDesc,
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: t.twoWayTexting,
      description: t.twoWayTextingDesc,
    },
    {
      icon: <Bell className="h-8 w-8 text-green-500" />,
      title: t.appointmentReminders,
      description: t.appointmentRemindersDesc,
    },
  ];

  const duringVisitFeatures = [
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      title: t.digitalWorkflow,
      description: t.digitalWorkflowDesc,
    },
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: t.digitalVehicleInspection,
      description: t.digitalVehicleInspectionDesc,
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-500" />,
      title: t.techflow,
      description: t.techflowDesc,
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-blue-500" />,
      title: t.qualityControl,
      description: t.qualityControlDesc,
    },
  ];

  const afterVisitFeatures = [
    {
      icon: <MessageCircle className="h-8 w-8 text-sky-500" />,
      title: t.automatedReviews,
      description: t.automatedReviewsDesc,
    },
    {
      icon: <BellIcon className="h-8 w-8 text-sky-500" />,
      title: t.crmReminders,
      description: t.crmRemindersDesc,
    },
    {
      icon: <Award className="h-8 w-8 text-sky-500" />,
      title: t.rewardsReferrals,
      description: t.rewardsReferralsDesc,
    },
    {
      icon: <CreditCard className="h-8 w-8 text-sky-500" />,
      title: t.textToPay,
      description: t.textToPayDesc,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Before the Visit Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-between">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-green-100 text-green-600 font-bold py-2 px-6 rounded-full inline-block self-center md:self-start">
            <span className="text-center">{t.beforeTheVisit}</span>
          </div>
          <div className="flex flex-col gap-6">
            {beforeVisitFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-green-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dotted line connector (visible on md screens and up) */}
        <div className="hidden md:block absolute top-1/4 left-[30%] w-[40%] h-16">
          <svg className="w-full h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25 H200" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M200 25 L190 15" stroke="#D1D5DB" strokeWidth="2" />
            <path d="M200 25 L190 35" stroke="#D1D5DB" strokeWidth="2" />
          </svg>
        </div>

        {/* During the Visit Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-blue-100 text-blue-600 font-bold py-2 px-6 rounded-full inline-block self-center">
            <span className="text-center">{t.duringTheVisit}</span>
          </div>
          <div className="flex flex-col gap-6">
            {duringVisitFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dotted line connector (visible on md screens and up) */}
        <div className="hidden md:block absolute top-3/4 left-[30%] w-[40%] h-16 rotate-180">
          <svg className="w-full h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25 H200" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M200 25 L190 15" stroke="#D1D5DB" strokeWidth="2" />
            <path d="M200 25 L190 35" stroke="#D1D5DB" strokeWidth="2" />
          </svg>
        </div>

        {/* After the Visit Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-sky-100 text-sky-600 font-bold py-2 px-6 rounded-full inline-block self-center md:self-end">
            <span className="text-center">{t.afterTheVisit}</span>
          </div>
          <div className="flex flex-col gap-6">
            {afterVisitFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-sky-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 