import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableCard = SortableElement(({ text }) => (
  <div className="bg-white p-4 shadow-md rounded-md mb-4 cursor-move">
    <p>{text}</p>
  </div>
));

const SortableEmptyTab = SortableContainer(({ cards }) => (
  <div className="flex flex-wrap justify-center">
    {cards.map((item, index) => (
      <SortableCard key={index} index={index} text={`Card ${item}`} />
    ))}
  </div>
));

const DragTask = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  const onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(`Move card from ${oldIndex} to ${newIndex}`);
  };

  return <SortableEmptyTab cards={cards} onSortEnd={onSortEnd} axis="xy" />;
};

export default DragTask;
