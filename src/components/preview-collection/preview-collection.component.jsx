import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="classname">{title.toUpperCase()}</h1>
      <div className="preview">
        {console.log(items)}
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
