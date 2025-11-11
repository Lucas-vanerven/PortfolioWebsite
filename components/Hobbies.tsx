
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import type { HobbiesContent } from '../types';
import { Card } from './ui/Card';
import { AnimatedSection } from './ui/AnimatedSection';

export const Hobbies: React.FC<{ content: HobbiesContent }> = ({ content }) => {
  const chartData = content.hobbies.map(hobby => ({
    subject: hobby.name,
    A: hobby.percentage,
    fullMark: 100,
  }));

  return (
    <AnimatedSection>
      <section id="hobbys" className="py-24">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#3ABFF8]">{content.title}</h2>
        <p className="text-lg text-center text-[#A1A1AA] mb-12">{content.intro}</p>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <defs>
                  <radialGradient id="colorUv" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#3ABFF8" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#2563EB" stopOpacity={0.9}/>
                  </radialGradient>
                </defs>
                <PolarGrid stroke="#1E3A5F" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#E5E7EB', fontSize: 14 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'none' }} axisLine={false} />
                <Radar name="Interest" dataKey="A" stroke="#3ABFF8" fill="url(#colorUv)" fillOpacity={0.6} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#112B3C',
                    border: '1px solid #1E3A5F',
                    borderRadius: '0.5rem',
                    color: '#E5E7EB'
                  }} 
                  labelStyle={{ color: '#3ABFF8' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {content.hobbies.map(hobby => (
              <Card key={hobby.name}>
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-[#3ABFF8] mb-2">{hobby.name}</h3>
                  <p className="text-[#A1A1AA] flex-grow">{hobby.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
