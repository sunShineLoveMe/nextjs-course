This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## nextjs教程
### 1.Pages和Layouts布局

**pages页面**  
pages是路由独有的用户界面。你可以通过从 page.js 文件导出组件来定义页面。使用嵌套文件夹定义路由，并使用 page.js 文件公开访问路由。


- 页面总是路由子树的叶子
- 页面可以使用 .js、.jsx 或 .tsx 文件扩展名
- 公开访问路由段需要有一个 page.js 文件
- 页面默认为服务器组件，但也可设置为客户端组件
- 页面可以获取数据

**Layouts**  
layouts是多个页面共享的用户界面。在导航时，布局会保留状态，保持交互性，并且不会重新渲染。布局还可以嵌套.  
你可以通过从 layout.js 文件中导出一个 React 组件来定义布局。该组件应接受一个 children prop，该 prop 将在呈现时填充子布局（如果存在）或子页面.
- 最顶部的布局称为根布局。应用程序中的所有页面都需要共享这一布局。根布局必须包含 html 和 body 标记
- 布局默认为服务器组件，但也可以设置为客户端组件
- 布局可以获取数据
- 默认情况下，路由中的布局是嵌套的。每个父布局都会使用 React children prop 封装其下方的子布局
- layout.js 和 page.js 文件可定义在同一文件夹中。layout将封装页面

**Root Layout (Required)根布局**  
根布局定义在应用程序目录的顶层，适用于所有路由。通过该布局，您可以修改从服务器返回的初始 HTML
```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
```
- 应用程序目录必须包含一个根布局
- 根布局必须定义 <html> 和 <body> 标记，因为 Next.js 不会自动创建它们
- 您可以使用内置的 SEO 支持来管理 <head> HTML 元素，例如title 元素
- 你可以使用路由组创建多个根布局
- 根布局默认为服务器组件，不能设置为客户端组件
  