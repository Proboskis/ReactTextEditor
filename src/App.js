import './App.css';
import {useState} from "react";
import ReactMarkdown from "react-markdown";
import {PrismAsyncLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coyWithoutShadows} from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
    const [input, setInput] = useState();

  return (
    <div className="App">
      <textarea autoFocus name="textarea" id="textArea" value={input} onChange={
          (e) => setInput(e.target.value)
      }>{console.info(input)}</textarea>
        <ReactMarkdown className="markdown" children={input}
            components={{
            code({className, children}) {
            let match = /language-(\w+)/.exec(className || '')
            return match ? (
            <SyntaxHighlighter
                className="codebox"
                showLineNumbers={true}
                wrapLongLines={true}
                children={String(children).replace(/\n$/, '')}
                style={coyWithoutShadows}
                language={match[1]}
            />
            ) : (
            <code className={className}>
                {children}
            </code>
            )
        }
        }}/>
    </div>
  );
}

export default App;
