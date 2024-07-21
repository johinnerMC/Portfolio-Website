/** @format */
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "styled-components";

interface CodeHighlighter {
  codeString: string;
  language: string;
}

const SyntaxContainer = styled.div`
  border-radius: 0.375rem;
  max-width: 42rem;
  min-width: 25rem;
  background: #3a404d;
  margin-left: auto;
  margin-right: auto;
`;

const SyntaxTitle = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #ffffff;
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const CopyButton = styled.button`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  background: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
`;

const Icon = styled.i`
  margin-top: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const CodeHighlighter = ({ codeString, language }: CodeHighlighter) => {
  const [copy, setCopy] = useState(false);

  return (
    <SyntaxContainer>
      <SyntaxTitle>
        <Text>Example code</Text>
        {copy ? (
          <CopyButton>
            <Icon className="uil uil-file-check-alt"></Icon>
            Copied!
          </CopyButton>
        ) : (
          <CopyButton
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
          >
            <Icon className="uil uil-copy"></Icon>
            Copy code
          </CopyButton>
        )}
      </SyntaxTitle>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          padding: "25px",
          borderRadius: "0.375rem",
          maxWidth: "42rem",
          minWidth: "25rem",
          margin: "0",
        }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </SyntaxContainer>
  );
};
