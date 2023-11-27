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

## 相关问题
- Suspense和promise 问题
  ```
    <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
    </Suspense>
  ```
  1. `Suspense` 是 React 提供的一个组件，用于实现延迟加载和代码分割。它可以在组件树中的某个位置标记出需要延迟加载的部分，并在加载完成之前显示一个回退（fallback）内容。在这段代码中，`Suspense` 组件用于包裹 `<UserPosts promise={userPostsData} />` 组件，以便在加载 `userPostsData` 数据时显示一个加载中的提示。
   
  2. `<UserPosts promise={userPostsData} />` 是一个自定义组件，它接受一个名为 `promise` 的 prop。在这里，`promise` prop 被赋值为 `userPostsData`，即 `getUserPosts(userId)` 所返回的 Promise 对象。这样做的目的是将异步获取的数据传递给 `<UserPosts>` 组件，以便在组件内部使用该数据进行渲染或其他操作。