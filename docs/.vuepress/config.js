/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-04-05 14:35:39
 * @LastEditors: zhan
 * @LastEditTime: 2020-04-06 11:39:15
 */
module.exports = {
  title: '我的个人网站',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: [
      {
        title: 'foo',
        path: '/foo/',
        collapsable: false, 
        sidebarDepth: 1,
        children: [
          {
            title: 'one',
            path: '/foo/one.md'
          },
          {
            title: 'two',
            path: '/foo/two.md'
          }
        ]
      },
      {
        title: 'bar',
        path: '/bar/',
        collapsable: false, 
        sidebarDepth: 1,
        children: [
          {
            title: 'three',
            path: '/bar/three.md'
          },
          {
            title: 'four',
            path: '/bar/four.md'
          }
        ]
      },
    ],
    sidebarDepth: 2, // 侧边栏显示2级
  }
};