# webApp

Learn how to build modern Web Apps that will elevate your developer experience.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@SameerJadav\_](https://twitter.com/SameerJadav_).
> See the roadmap below.

## About this project

This project is your go-to guide for building modern web apps. It's packed with best practices I've learned over the years. While I won't cover every possible thing you can do with these tools, I'll focus on the most important ones that are sufficient for building the majority of web apps. The guides will include all the important links you need to dive deeper into each tool.

## Features

- New `/app` dir,
- Routing using **Next.js**
- Loading UI
- Route handlers
- Metadata and SEO
- Server and Client Components
- **[shadcn/ui](https://ui.shadcn.com)** Components library
- Guides using **MDX** and **Contentlayer**
- Styled using **Tailwind CSS**
- Color system using **Radix Colors**

## Roadmap

- [ ] Create guides
- [ ] Set up a `/guides` directory with contentlayer
- [ ] Include a contribution guide page
- [ ] Add an "Edit this page" link
- [ ] Implement a "Was this helpful?" component
- [ ] Add loading UI
- [ ] Generate OG images for guides using `@vercel/og`

## Running Locally

To run this project on your local machine, simply clone this repository and ensure you have the required dependencies installed using **pnpm**.

### Colors Use Cases

> I am using [radix colors](https://www.radix-ui.com/colors) for this project. The radix colour system an open-source color system for designing beautiful, accessible websites and apps.

There are 12 steps in each scale. Each step was designed for at least one specific use case.

This table is a simple overview of the most common use case for each step. However, there are many exceptions and caveats to factor in, which are covered in further detail below.

| Step | Use Case                                |
| ---- | --------------------------------------- |
| 1    | App background                          |
| 2    | Subtle background                       |
| 3    | UI element background                   |
| 4    | Hovered UI element background           |
| 5    | Active / Selected UI element background |
| 6    | Subtle borders and separators           |
| 7    | UI element border and focus rings       |
| 8    | Hovered UI element border               |
| 9    | Solid backgrounds                       |
| 10   | Hovered solid backgrounds               |
| 11   | Low-contrast text                       |
| 12   | High-contrast text                      |

## Inspired by

- [Taxonomy](https://tx.shadcn.com)
- [nextra](https://nextra.site)
- [nan.fyi](https://www.nan.fyi)
- [Next.js](https://nextjs.org)

## License

Licensed under the [MIT license](./LICENSE.md).
