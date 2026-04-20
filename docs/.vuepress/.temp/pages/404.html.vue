<template><div><p>404 Not Found</p>
</div></template>
<script>
export const _pageData = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"NotFound\"},\"git\":{},\"filePathRelative\":null}")
export default { name: "404.html.vue" }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData?.(_pageData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updatePageData?.(m._pageData)
  })
}

</script>