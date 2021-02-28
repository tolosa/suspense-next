# React Suspense example in Next.js

Examples using Suspense APIs in Next.js

## How to enable experimental React in Next.js

Install React experimental packages:

```
yarn add next react@experimental react-dom@experimental
```

Enable experimental and strict React modes in `next.config.js`:

```javascript
module.exports = {
  experimental: {
    reactMode: 'concurrent'
  },
  reactStrictMode: true
}
```
