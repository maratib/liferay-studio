// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://webpup.github.io",
  integrations: [
    starlight({
      title: "webpup",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/webpup",
        },
      ],
      sidebar: [
        {
          label: "Projects",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Just-Blade", slug: "just-blade" },
            { label: "WP-Blade", slug: "wp-blade" },
            { label: "WP-Theme", slug: "wp-theme" },
          ],
        },
        //   {
        //     label: "Guides",
        //     items: [
        //       // Each item here is one entry in the navigation menu.
        //       { label: "Example Guide", slug: "guides/example" },
        //     ],
        //   },
        //   {
        //     label: "Reference",
        //     autogenerate: { directory: "reference" },
        //   },
      ],
    }),
  ],
});
