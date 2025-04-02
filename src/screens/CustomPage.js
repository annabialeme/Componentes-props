import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

const CustomPage = () => {
  const cardsData = [
    {
      title: 'Primeiro Card',
      description: 'Ruby Bell.',
      image: 'image1',
    },
    {
      title: 'Segundo Card',
      description: 'James Beaufort.',
      image: 'image2',
    },
    {
      title: 'Terceiro Card',
      description: 'os dois juntos.',
      image: 'image3',
    },
  ];

  return (
    <ScrollView>
      <Header title="Página Personalizada com Props" />
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </ScrollView>
  );
};

export default CustomPage;



