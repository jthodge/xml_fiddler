import React from 'react';
import SubNode from './SubNode.js';
import TextNode from './TextNode.js';
import EmptyTag from './EmptyTag.js';

const nodeFactory = (element, index) => {
  var isEmptyNode = (!element.elements) || (element.elements.length === 0);
  var isEndNode = (element.elements) && (element.elements.length === 1) && element.elements[0].type === "text";

  if(isEmptyNode) {
    return (
      [<EmptyTag key={index} name={element.name} attributes={element.attributes} />]
    );
  } else if(isEndNode) {
    return (
      [<TextNode key={index} name={element.name} text={element.elements[0].text} />]
    );
  } else {
    const componentRef = React.createRef();

    return (
      [<SubNode
        key={index}
        name={element.name}
        elements={element.elements}
        attributes={element.attributes}
        ref={componentRef}
      />, componentRef]
    );
  }
}

export default nodeFactory;
