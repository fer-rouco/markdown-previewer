import React from 'react';
import { Panel } from './Panel';
import './Editor.scss';

export class Editor extends React.Component {
  
  constructor(props) {
    super(props);
    
    const DEFAULT_TEXT = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
    //console.log(DEFAULT_TEXT);
    
    this.onTextChange = this.onTextChange.bind(this);
    this.state = {
      text: DEFAULT_TEXT
    };

  }
  
  onTextChange(text) {
    this.setState((state) => ({
      text: text.target.value
    }));
    
    this.props.submitNewText(text.target.value);
  };
  
  componentWillMount() {
    this.props.submitNewText(this.state.text);
  }
  
  render() {
    return (
      <Panel icon="fa-solid fa-user" title="Editor" className="editorWrap" >
        <textarea id="editor" placeholder="Editor" value={this.state.text} onChange={this.onTextChange} ></textarea>
      </Panel>      
    );    
  }
}
