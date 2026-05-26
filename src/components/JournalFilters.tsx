'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Pediatric', value: 'pediatric' },
  { label: 'Prenatal', value: 'prenatal' },
  { label: 'Postpartum', value: 'postpartum' },
  { label: 'Family', value: 'family' },
  { label: 'Wellness', value: 'wellness' },
  { label: 'First Visit', value: 'first-visit' },
];

const articles = [
  {
    category: 'pediatric',
    categoryLabel: 'Pediatric',
    meta: '5 Min Read \u00b7 May 2026',
    title: 'Why Pediatric Chiropractic Isn\u2019t What You Think',
    excerpt: 'Most parents picture cracking and popping. The reality is fingertip pressure, gentle holds, and a baby who usually sleeps through the whole thing.',
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80',
    alt: 'Happy smiling baby',
    delay: 0 as const,
  },
  {
    category: 'prenatal',
    categoryLabel: 'Prenatal',
    meta: '4 Min Read \u00b7 Apr 2026',
    title: 'Webster Technique: What Every Expecting Mom Should Know',
    excerpt: 'The Webster technique isn\u2019t about turning babies \u2014 it\u2019s about creating balance in the pelvis so your body can do what it already knows how to do.',
    img: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=1200&q=80',
    alt: 'Pregnant woman in natural light',
    delay: 1 as const,
  },
  {
    category: 'first-visit',
    categoryLabel: 'First Visit',
    meta: '3 Min Read \u00b7 Mar 2026',
    title: 'Your First Visit: What to Expect at Maverick',
    excerpt: 'No surprises, no pressure. Here\u2019s exactly what happens from the moment you walk through the door to the moment you leave feeling better.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    alt: 'Modern chiropractic clinic interior',
    delay: 2 as const,
  },
  {
    category: 'postpartum',
    categoryLabel: 'Postpartum',
    meta: '6 Min Read \u00b7 Mar 2026',
    title: 'Postpartum Recovery: More Than Just \u2018Bouncing Back\u2019',
    excerpt: 'Your body just did something extraordinary. Recovery isn\u2019t about getting back to where you were \u2014 it\u2019s about moving forward with support, patience, and care.',
    img: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1200&q=80',
    alt: 'Mother tenderly holding her newborn baby',
    delay: 0 as const,
  },
  {
    category: 'pediatric',
    categoryLabel: 'Pediatric',
    meta: '4 Min Read \u00b7 Feb 2026',
    title: '5 Signs Your Child Might Benefit from Chiropractic Care',
    excerpt: 'From trouble sleeping to frequent ear infections, sometimes the signs are subtle. Here\u2019s what to look for and when gentle chiropractic care might help.',
    img: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=1200&q=80',
    alt: 'Father carrying child on his shoulders',
    delay: 1 as const,
  },
  {
    category: 'prenatal',
    categoryLabel: 'Prenatal',
    meta: '7 Min Read \u00b7 Jan 2026',
    title: 'Chiropractic During Pregnancy: Trimester by Trimester',
    excerpt: 'Each trimester brings its own shifts. Here\u2019s how chiropractic care adapts to support you and your growing baby through every stage of pregnancy.',
    img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&q=80',
    alt: 'Pregnant belly in natural light',
    delay: 2 as const,
  },
  {
    category: 'family',
    categoryLabel: 'Family',
    meta: '5 Min Read \u00b7 Dec 2025',
    title: 'Building a Family Wellness Routine',
    excerpt: 'Wellness isn\u2019t a one-time event \u2014 it\u2019s a rhythm. Simple, sustainable habits that help your whole family thrive, from morning to bedtime.',
    img: 'https://images.unsplash.com/photo-1484665754804-74b091211472?w=1200&q=80',
    alt: 'Family playing together outdoors',
    delay: 0 as const,
  },
  {
    category: 'pediatric',
    categoryLabel: 'Pediatric',
    meta: '4 Min Read \u00b7 Nov 2025',
    title: 'Understanding Colic: A Gentle Approach',
    excerpt: 'Colic can feel relentless for both baby and parents. Understanding the root causes \u2014 and exploring gentle solutions \u2014 can make all the difference.',
    img: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1200&q=80',
    alt: 'Mother in intimate moment with newborn',
    delay: 1 as const,
  },
  {
    category: 'wellness',
    categoryLabel: 'Wellness',
    meta: '3 Min Read \u00b7 Oct 2025',
    title: 'The Connection Between Posture and Sleep Quality',
    excerpt: 'How you hold yourself during the day shapes how well you rest at night. Small postural shifts can lead to dramatically better sleep for the whole family.',
    img: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=1200&q=80',
    alt: 'Woman sleeping peacefully',
    delay: 2 as const,
  },
];

export default function JournalFilters() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  return (
    <>
      {/* Category Filter Bar */}
      <section className="filter-bar">
        <div className="filter-bar-inner">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-pill${activeFilter === cat.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="article-grid-section">
        <div className="article-grid" id="articleGrid">
          {filteredArticles.map((article, i) => (
            <ScrollReveal
              key={article.title}
              variant="reveal"
              delay={(i % 3) as 0 | 1 | 2}
              as="article"
              className="article-card"
            >
              <div className="article-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.img}
                  alt={article.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="category-pill">{article.categoryLabel}</span>
              <p className="meta">{article.meta}</p>
              <h3>{article.title}</h3>
              <p className="excerpt">{article.excerpt}</p>
              <a href="#" className="read-link">Read</a>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
