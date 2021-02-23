# vue-pdf-preview
PDF文件 简单预览。
## 外部需求
需要预先引用mozilla的`pdf.js`
```html
<script src="https://cdn.bootcss.com/pdf.js/1.9.456/pdf.min.js"></script>
```
## 组件
`<PDFPreview workerSrc='/some-pdf.worker.js' />`
### Props
`workerSrc` type: **String** 是否必填：**否** 

PDF Worker文件的url

默认：使用cdn会根据`pdf.js`的url自动找到。

**注:** PDFPreview 全局**只能有一个**, 重复加载会报错！

## 打开
```js
`import PDFPreview from 'vue-pdf-preview'`
PDFPreview.open(somePDFURL);
```

## 样式表 class API
`.dw-pdf-wrap` 最外层.<br/>
`.dw-pdf-body` PDF页包裹层.<br/>
`.dw-pdf-nav` 导航栏<br/>
`.dw-pdf-prev-page-btn, .dw-pdf-next-page-btn, .dw-pdf-close-btn` 上一页,下一页,关闭按钮<br/>
`.dw-pdf-loading` 加载PDF文件时loading提示。
