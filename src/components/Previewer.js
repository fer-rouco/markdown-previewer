import React from 'react';
import { Panel } from './Panel';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './Previewer.scss';

export class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.parseText = this.parseText.bind(this);
  }
  
  parseText(text) {
    let result;
    try {
      result = (!text || (text && text.length > 0)) ? DOMPurify.sanitize(marked.parse(...text, {breaks: true , gfm: true})) : '';
    }
    catch(error) {
      console.error(error);
    }

    return result;
  }
  
  render() {
    return (
      <Panel icon="fa-solid fa-eye" title="Previewer" >
        <div id="preview" placeholder="Previewer"
          dangerouslySetInnerHTML={{
            __html: this.parseText(this.props.text)
          }}
        ></div>
      </Panel>
    );
  };
}
