# Swiss Design Portfolio

Modern React + Vite portfolio with data‑driven project pages, design tokens, theme toggling, and modular components.

## Tech Stack

- React 19 + Vite 6 (SWC plugin)
- React Router for routing (`/project/:slug` dynamic pages)
- Design tokens in `src/styles/tokens.css`
- Global layer in `src/styles/global.css`
- CSS Modules (gradual migration) for component isolation

## Project Structure (Key Folders)

```
src/
	components/
		project/          # Shared project layout + content components
		ui/               # Reusable UI pieces (e.g. TrackLines)
	pages/
		Home/             # HomePage + section components
	data/projects.js    # Central project metadata
	styles/             # tokens.css, global.css, legacy globals being migrated
```

## Adding a New Project

1. Edit `src/data/projects.js` and add a new object:

```js
{
	slug: 'new-project',
	title: 'New Project Name',
	date: '2025',
	links: { github: 'https://github.com/user/repo' },
	comingSoon: false
}
```

2. Create a content component under `src/components/project/content/` named `NewProjectContent.jsx`:

```jsx
export default function NewProjectContent() {
  return (
    <div>
      <p>Description...</p>
      {/* images, lists, etc. */}
    </div>
  );
}
```

3. Map the slug to the component in `src/pages/ProjectPage.jsx` (add an import and extend `contentMap`).
4. Place any images in `public/images/<project>/` and reference with `/images/<project>/<file>.png`.
5. Run `npm run dev` and visit `/project/new-project` to verify.

## Theming

- Theme toggle stores preference in `localStorage`.
- Dark/light tokens defined in `tokens.css` using `data-theme` attribute on `<html>`.

## Accessibility & Keyboard Navigation

- Project rows are keyboard focusable; Enter/Space activates navigation.
- Focus ring uses `var(--color-yellow)`.

## Planned Enhancements

- ThemeProvider context wrapper
- Lazy loading of project content components
- Vitest tests for hooks and routing
- ESLint `jsx-a11y` + Prettier integration

## Development Scripts

- `npm run dev` – start local dev server
- `npm run build` – production build

## Contributing

Keep new components small and colocate styles via CSS Modules. Prefer tokens over hardcoded colors. Follow the project addition steps above.
