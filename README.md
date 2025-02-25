# Turborepo Next.js starter

This is a starter Turborepo with Next.js and shadcn/ui pre-configured.

## Usage

Install dependencies:

```sh
cd monorepo
npm install
```

### Build

To build all apps and packages, run the following command:

```sh
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```sh
npm run dev
```

### Develop a specific app

To develop a specific app, run the following command:

```sh
npm run dev <app-name>
```

The available apps are `shop` and `web`.

### Add ui components

Use the pre-made script:

```sh
npm run ui:add <component-name>
```

> This works just like the add command in the `shadcn/ui` CLI.

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
npx turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
npx turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `npm install` after copying an app.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `shop`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `@monorepo/ui`: a stub React component library shared by both `web` and `shop` applications (🚀 powered by [shadcn/ui](https://ui.shadcn.com/))
- `@monorepo/eslint-config`: `eslint` configurations (includes `prettier` configuration as well)

### Utilities

This monorepo has some additional tools already setup for you:

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd monorepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Learn more about shadcn/ui:

- [Documentation](https://ui.shadcn.com/docs)
