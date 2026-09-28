/**
 * Design lab: throwaway layout prototypes that exist ONLY under `npm run dev`.
 *
 * Prototypes live in lab/<topic>/<variant>.astro at the repo root. This
 * integration adds the /lab/ pages to the dev server and does nothing during
 * `astro build`, so prototypes are never built or deployed.
 * See docs/adr for the design lab decision and lab/README.md for usage.
 */
export default function designLab() {
  return {
    name: 'design-lab',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command !== 'dev') return;
        injectRoute({
          pattern: '/lab/[...path]',
          entrypoint: new URL('./LabRouter.astro', import.meta.url),
        });
      },
    },
  };
}
