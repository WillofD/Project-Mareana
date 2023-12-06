import React, { useState, useEffect } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableCard = SortableElement(({ name, imageUrl }) => (
  <div className="bg-white p-4 shadow-md rounded-md mb-4 cursor-move">
    <img src={imageUrl} alt={name} className="w-full h-auto mb-2" />
    <p>{name}</p>
  </div>
));

const SortableEmptyTab = SortableContainer(({ items }) => (
  <div className="flex flex-wrap justify-center">
    {items.map((item, index) => (
      <SortableCard key={index} index={index} name={item.name} imageUrl={item.imageUrl} />
    ))}
  </div>
));

const EmptyTab = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://source.unsplash.com/collection/1163637/300x200/?sig=' + new Date().getTime()
        );
        const imageUrl = response.url;
        setItems(Array.from({ length: 6 }, (_, index) => ({ name: `Player ${index + 1}`, imageUrl })));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []); 

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const arrayMove = (arr, oldIndex, newIndex) => {
    const newArray = [...arr];
    newArray.splice(newIndex, 0, newArray.splice(oldIndex, 1)[0]);
    return newArray;
  };

  return <SortableEmptyTab items={items} onSortEnd={onSortEnd} axis="xy" />;
};

export default EmptyTab;
