# 项目说明

## 快速开始

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## nextjs相关文档

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Vercel 部署

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 相关组件库
### 1. next-auth
    它是集成身份验证和授权功能，next-auth/react是next-auth库的React的封装，他提供了一组React的组件和钩子，用于在Next.js应用程序中处理身份验证逻辑,它提供了实现用户注册，登陆，注销和密码重置功能，其中还有以下组件和钩子
  - useSesson 钩子：用于获取当前用户的会话信息
  - Provider：组件：用于整个程序中提供身份验证的上下文
  - SignIn:组件： 用于呈现登陆界面
  - SignOut: 组件： 用于呈现注销按钮
  - getSession: 一个函数：用于获取服务器渲染期间的用户会话信息

## 相关问题
### 1. "use client" 问题
    `nextjs 中报错You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default. Learn more: https://nextjs.org/docs/getting-started/react-essential`
这个问题主要是在next.js中使用useEffect钩子组件中，但是该组件没有标记为客户端组件，因为在nextjs中，组件可以是服务器渲染或者客户端渲染，如果你的组件需要在客户端运行，则需要将其标注为客户端组件，可以在组件文件中的顶部添加**useClient** s
