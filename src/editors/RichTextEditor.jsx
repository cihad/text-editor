import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TRANSFORMERS } from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { $getRoot } from 'lexical';
import { useCallback, useMemo, useRef } from 'react';

import {
  AutoLinkPlugin,
  CodeHighlightPlugin,
  ListMaxIndentLevelPlugin,
  ToolbarPlugin,
  TreeViewPlugin,
} from '../plugins';
import Theme from '../theme';

import './styles.css';

function Placeholder({ text }) {
  return (
    <div className="editor-placeholder">
      {text || 'Enter some rich text...'}
    </div>
  );
}

const editorConfig = {
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // The editor theme
  theme: Theme,
};

export function RichTextEditor({
  editable = true,
  onChange,
  placeholder,
  treeView = false,
  value,
}) {
  const editorStateRef = useRef(value);

  const config = useMemo(() => {
    return {
      editable,
      editorState: editorStateRef.current,
      ...editorConfig,
    };
  }, [editorStateRef.current, editable]);

  return (
    <LexicalComposer initialConfig={config}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder text={placeholder} />}
          />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          {treeView && <TreeViewPlugin />}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
