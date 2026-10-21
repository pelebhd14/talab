import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import React, { useState, useEffect } from 'react';
import { topicsData } from '../../learningData.js';
import ContentCard from '../contentCard/contentCard.jsx'

export default function Learning() {

  const [currentTopicId, setCurrentTopicId] = useState('management');
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTopic = topicsData.find(t => t.id === currentTopicId);
  const currentPageData = currentTopic.pages[currentIndex];

  const handleSelectTopic = (topicId) => {
    setCurrentTopicId(topicId);
    setCurrentIndex(0);
  };

  const handleNextPage = () => {
    if (currentIndex < currentTopic.pages.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="learning">
      <div className='logos'>
        <img className='Bahalaz' src={Bahalaz} alt="Bahalaz" />
        <img className='Pele' src={Pele} alt="Pele" />
      </div>
      <img className='Mountain' src={Mountain} alt="Mountain" />

      <ContentCard
        mainTitle={currentTopic.title}
        subtitle={currentPageData.subtitle}
        content={currentPageData.content}
        currentIndex={currentIndex}
        totalPages={currentTopic.pages.length}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
}