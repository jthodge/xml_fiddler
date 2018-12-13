import React, { Component } from 'react';
import OpenTag from './OpenTag.js';
import CloseTag from './CloseTag.js';

class EndNode extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', text: '', indentation: 0 };
  }

  spaces() {
    return <span dangerouslySetInnerHTML={{ __html: "&nbsp;".repeat(this.props.indentation) }} />
  }

  render() {
    return (
      <div>
        {this.spaces()}
        <OpenTag name={this.props.name}/>
        {this.props.text}
        <CloseTag name={this.props.name} />
      </div>
    );
  }
}

export default EndNode;
