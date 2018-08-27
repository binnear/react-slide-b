# react-contenteditable-b

基于react的h5 contenteditable属性封装的组件

# Installation

```
  npm install react-contenteditable-b --save
```

# Usage

```
  import Contenteditable from 'react-contenteditable-b';
  <Contenteditable
    initHtml='<span>this is a contenteditabel el</span>'
    onChange={(e, innerHtml)=>console.log(e, innerHtml)}
  />
```