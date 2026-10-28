import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import React, { useState, useEffect } from 'react';
import { topicsData } from '../../learningData.js';
import ContentCard from '../contentCard/contentCard.jsx'
import './learning.css';

export default function Learning() {

  const [currentTopicId, setCurrentTopicId] = useState(topicsData[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTopicIndex = topicsData.findIndex(t => t.id === currentTopicId);
  const currentTopic = topicsData[currentTopicIndex];
  const currentPageData = currentTopic.pages[currentIndex];

  const handleSelectTopic = (topicId) => {
    setCurrentTopicId(topicId);
    setCurrentIndex(0);
  };

  const handleNextPage = () => {

    if (currentIndex < currentTopic.pages.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (currentTopicIndex < topicsData.length - 1) {
      const nextTopic = topicsData[currentTopicIndex + 1];
      setCurrentTopicId(nextTopic.id);
      setCurrentIndex(0);
    }
  };

  const handlePrevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (currentTopicIndex > 0) {
      const prevTopic = topicsData[currentTopicIndex - 1];
      setCurrentTopicId(prevTopic.id);
      setCurrentIndex(prevTopic.pages.length - 1);
    }
  };

  const hasNext = currentIndex < currentTopic.pages.length - 1 || currentTopicIndex < topicsData.length - 1;
  const hasPrev = currentIndex > 0 || currentTopicIndex > 0;

  return (
    <div className="learning">
      <div className='logos'>
        <img className='logoB-test' src={Bahalaz} alt="Bahalaz" />
        <img className='logoP-test' src={Pele} alt="Pele" />
      </div>
      <img className='Mountain' src={Mountain} alt="Mountain" />

      <ContentCard
        mainTitle={currentTopic.title}
        subtitle={currentPageData.subtitle}
        content={currentPageData.content}
        items={currentPageData.items}
        rows={currentPageData.rows}
        headers={currentPageData.headers}
        contentAfter={currentPageData.contentAfter}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
}