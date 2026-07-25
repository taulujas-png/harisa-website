# Custom Codebase of Harisa Website (Excluding shadcn UI components)

This document contains the source code files for the Harisa website. It is structured to be easily read and analyzed by AI models.

## Table of Contents

- [.env.local](#envlocal)
- [.gitignore](#gitignore)
- [.kilo\.gitignore](#kilogitignore)
- [.kilo\package-lock.json](#kilopackage-lockjson)
- [.kilo\package.json](#kilopackagejson)
- [app\globals.css](#appglobalscss)
- [app\icon.svg](#appiconsvg)
- [app\layout.tsx](#applayouttsx)
- [app\page.tsx](#apppagetsx)
- [components.json](#componentsjson)
- [components\available-slots.tsx](#componentsavailable-slotstsx)
- [components\core-usps.tsx](#componentscore-uspstsx)
- [components\faq.tsx](#componentsfaqtsx)
- [components\final-cta.tsx](#componentsfinal-ctatsx)
- [components\footer.tsx](#componentsfootertsx)
- [components\harisa-ornament.tsx](#componentsharisa-ornamenttsx)
- [components\header.tsx](#componentsheadertsx)
- [components\hero.tsx](#componentsherotsx)
- [components\how-lesson-works.tsx](#componentshow-lesson-workstsx)
- [components\lesson-format.tsx](#componentslesson-formattsx)
- [components\mission-quote.tsx](#componentsmission-quotetsx)
- [components\ornaments.tsx](#componentsornamentstsx)
- [components\reveal.tsx](#componentsrevealtsx)
- [components\stats-bar.tsx](#componentsstats-bartsx)
- [components\teacher.tsx](#componentsteachertsx)
- [components\theme-provider.tsx](#componentstheme-providertsx)
- [components\three-games.tsx](#componentsthree-gamestsx)
- [deployment.md](#deploymentmd)
- [harisa ornament.svg](#harisa-ornamentsvg)
- [hooks\use-mobile.ts](#hooksuse-mobilets)
- [hooks\use-scroll-reveal.ts](#hooksuse-scroll-revealts)
- [hooks\use-toast.ts](#hooksuse-toastts)
- [lib\supabase.ts](#libsupabasets)
- [lib\utils.ts](#libutilsts)
- [next-env.d.ts](#next-envdts)
- [next.config.mjs](#nextconfigmjs)
- [package.json](#packagejson)
- [pnpm-workspace.yaml](#pnpm-workspaceyaml)
- [postcss.config.mjs](#postcssconfigmjs)
- [public\icon.svg](#publiciconsvg)
- [public\placeholder-logo.svg](#publicplaceholder-logosvg)
- [public\placeholder.svg](#publicplaceholdersvg)
- [styles\globals.css](#stylesglobalscss)
- [tsconfig.json](#tsconfigjson)

---

## .env.local
```tsx
NEXT_PUBLIC_SUPABASE_URL="https://oavmddmynugdpoetfyjv.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="sb_publishable_Eo5qpV-fR1bAOUJEpuGWoA_hYnZJEIF"

```

---

## .gitignore
```tsx
# v0 sandbox internal files
__v0_runtime_loader.js
__v0_devtools.tsx
__v0_jsx-dev-runtime.ts
.snowflake/
.v0-trash/
.vercel/

# Environment variables
.env*.local

# Common ignores
node_modules
.next/
.DS_Store
```

---

## .kilo\.gitignore
```tsx
node_modules
package.json
package-lock.json
pnpm-lock.yaml
bun.lock
yarn.lock
.gitignore
```

---

## .kilo\package-lock.json
```json
{
  "name": ".kilo",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "@kilocode/plugin": "7.3.0"
      }
    },
    "node_modules/@kilocode/plugin": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/@kilocode/plugin/-/plugin-7.3.0.tgz",
      "integrity": "sha512-DGM/6xWoEeQqI6nmLNOt39jLdQDQMZvHPb3L1ziuStHvl8WpU/BLgC+ThdYRxNZZgS1W6l9Vy58THFUkgVOHZg==",
      "license": "MIT",
      "dependencies": {
        "@kilocode/sdk": "7.3.0",
        "effect": "4.0.0-beta.57",
        "zod": "4.1.8"
      },
      "peerDependencies": {
        "@opentui/core": ">=0.2.2",
        "@opentui/solid": ">=0.2.2"
      },
      "peerDependenciesMeta": {
        "@opentui/core": {
          "optional": true
        },
        "@opentui/solid": {
          "optional": true
        }
      }
    },
    "node_modules/@kilocode/sdk": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/@kilocode/sdk/-/sdk-7.3.0.tgz",
      "integrity": "sha512-E3izR+Qu/Ku/y2Tu8Cy0AL+alYytq/Qm4VmmFmzSZZQVZVXmH74cXjOxSL6J15FZNUxuNGfDZM8u+Avbje/jMw==",
      "license": "MIT",
      "dependencies": {
        "cross-spawn": "7.0.6"
      }
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-darwin-arm64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-darwin-arm64/-/msgpackr-extract-darwin-arm64-3.0.3.tgz",
      "integrity": "sha512-QZHtlVgbAdy2zAqNA9Gu1UpIuI8Xvsd1v8ic6B2pZmeFnFcMWiPLfWXh7TVw4eGEZ/C9TH281KwhVoeQUKbyjw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-darwin-x64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-darwin-x64/-/msgpackr-extract-darwin-x64-3.0.3.tgz",
      "integrity": "sha512-mdzd3AVzYKuUmiWOQ8GNhl64/IoFGol569zNRdkLReh6LRLHOXxU4U8eq0JwaD8iFHdVGqSy4IjFL4reoWCDFw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-linux-arm": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-arm/-/msgpackr-extract-linux-arm-3.0.3.tgz",
      "integrity": "sha512-fg0uy/dG/nZEXfYilKoRe7yALaNmHoYeIoJuJ7KJ+YyU2bvY8vPv27f7UKhGRpY6euFYqEVhxCFZgAUNQBM3nw==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-linux-arm64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-arm64/-/msgpackr-extract-linux-arm64-3.0.3.tgz",
      "integrity": "sha512-YxQL+ax0XqBJDZiKimS2XQaf+2wDGVa1enVRGzEvLLVFeqa5kx2bWbtcSXgsxjQB7nRqqIGFIcLteF/sHeVtQg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-linux-x64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-linux-x64/-/msgpackr-extract-linux-x64-3.0.3.tgz",
      "integrity": "sha512-cvwNfbP07pKUfq1uH+S6KJ7dT9K8WOE4ZiAcsrSes+UY55E/0jLYc+vq+DO7jlmqRb5zAggExKm0H7O/CBaesg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@msgpackr-extract/msgpackr-extract-win32-x64": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@msgpackr-extract/msgpackr-extract-win32-x64/-/msgpackr-extract-win32-x64-3.0.3.tgz",
      "integrity": "sha512-x0fWaQtYp4E6sktbsdAqnehxDgEc/VwM7uLsRCYWaiGu0ykYdZPiS8zCWdnjHwyiumousxfBm4SO31eXqwEZhQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/effect": {
      "version": "4.0.0-beta.57",
      "resolved": "https://registry.npmjs.org/effect/-/effect-4.0.0-beta.57.tgz",
      "integrity": "sha512-rg32VgXnLKaPRs9tbRDaZ5jxmzNY7ojXt85gSHGUTwdlbWH5Ik+OCUY2q14TXliygPGoHwCAvNWS4bQJOqf00g==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.1.0",
        "fast-check": "^4.6.0",
        "find-my-way-ts": "^0.1.6",
        "ini": "^6.0.0",
        "kubernetes-types": "^1.30.0",
        "msgpackr": "^1.11.9",
        "multipasta": "^0.2.7",
        "toml": "^4.1.1",
        "uuid": "^13.0.0",
        "yaml": "^2.8.3"
      }
    },
    "node_modules/fast-check": {
      "version": "4.8.0",
      "resolved": "https://registry.npmjs.org/fast-check/-/fast-check-4.8.0.tgz",
      "integrity": "sha512-GOJ158CUMnN6cSahsv4+ExARvIDuzzinFjkp0E9WtiBa5zcVeLozVkWaE4IzFcc+Y48Wp1EDlUZsXRyAztQcSg==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "pure-rand": "^8.0.0"
      },
      "engines": {
        "node": ">=12.17.0"
      }
    },
    "node_modules/find-my-way-ts": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/find-my-way-ts/-/find-my-way-ts-0.1.6.tgz",
      "integrity": "sha512-a85L9ZoXtNAey3Y6Z+eBWW658kO/MwR7zIafkIUPUMf3isZG0NCs2pjW2wtjxAKuJPxMAsHUIP4ZPGv0o5gyTA==",
      "license": "MIT"
    },
    "node_modules/ini": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/ini/-/ini-6.0.0.tgz",
      "integrity": "sha512-IBTdIkzZNOpqm7q3dRqJvMaldXjDHWkEDfrwGEQTs5eaQMWV+djAhR+wahyNNMAa+qpbDUhBMVt4ZKNwpPm7xQ==",
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "license": "ISC"
    },
    "node_modules/kubernetes-types": {
      "version": "1.30.0",
      "resolved": "https://registry.npmjs.org/kubernetes-types/-/kubernetes-types-1.30.0.tgz",
      "integrity": "sha512-Dew1okvhM/SQcIa2rcgujNndZwU8VnSapDgdxlYoB84ZlpAD43U6KLAFqYo17ykSFGHNPrg0qry0bP+GJd9v7Q==",
      "license": "Apache-2.0"
    },
    "node_modules/msgpackr": {
      "version": "1.11.12",
      "resolved": "https://registry.npmjs.org/msgpackr/-/msgpackr-1.11.12.tgz",
      "integrity": "sha512-RBdJ1Un7yGlXWajrkxcSa93nvQ0w4zBf60c0yYv7YtBelP8H2FA7XsfBbMHtXKXUMUxH7zV3Zuozh+kUQWhHvg==",
      "license": "MIT",
      "optionalDependencies": {
        "msgpackr-extract": "^3.0.2"
      }
    },
    "node_modules/msgpackr-extract": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/msgpackr-extract/-/msgpackr-extract-3.0.3.tgz",
      "integrity": "sha512-P0efT1C9jIdVRefqjzOQ9Xml57zpOXnIuS+csaB4MdZbTdmGDLo8XhzBG1N7aO11gKDDkJvBLULeFTo46wwreA==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "node-gyp-build-optional-packages": "5.2.2"
      },
      "bin": {
        "download-msgpackr-prebuilds": "bin/download-prebuilds.js"
      },
      "optionalDependencies": {
        "@msgpackr-extract/msgpackr-extract-darwin-arm64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-darwin-x64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-linux-arm": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-linux-arm64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-linux-x64": "3.0.3",
        "@msgpackr-extract/msgpackr-extract-win32-x64": "3.0.3"
      }
    },
    "node_modules/multipasta": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/multipasta/-/multipasta-0.2.7.tgz",
      "integrity": "sha512-KPA58d68KgGil15oDqXjkUBEBYc00XvbPj5/X+dyzeo/lWm9Nc25pQRlf1D+gv4OpK7NM0J1odrbu9JNNGvynA==",
      "license": "MIT"
    },
    "node_modules/node-gyp-build-optional-packages": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/node-gyp-build-optional-packages/-/node-gyp-build-optional-packages-5.2.2.tgz",
      "integrity": "sha512-s+w+rBWnpTMwSFbaE0UXsRlg7hU4FjekKU4eyAih5T8nJuNZT1nNsskXpxmeqSK9UzkBl6UgRlnKc8hz8IEqOw==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "detect-libc": "^2.0.1"
      },
      "bin": {
        "node-gyp-build-optional-packages": "bin.js",
        "node-gyp-build-optional-packages-optional": "optional.js",
        "node-gyp-build-optional-packages-test": "build-test.js"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pure-rand": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/pure-rand/-/pure-rand-8.4.0.tgz",
      "integrity": "sha512-IoM8YF/jY0hiugFo/wOWqfmarlE6J0wc6fDK1PhftMk7MGhVZl88sZimmqBBFomLOCSmcCCpsfj7wXASCpvK9A==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/toml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/toml/-/toml-4.1.1.tgz",
      "integrity": "sha512-EBJnVBr3dTXdA89WVFoAIPUqkBjxPMwRqsfuo1r240tKFHXv3zgca4+NJib/h6TyvGF7vOawz0jGuryJCdNHrw==",
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/uuid": {
      "version": "13.0.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-13.0.2.tgz",
      "integrity": "sha512-vzi9uRZ926x4XV73S/4qQaTwPXM2JBj6/6lI/byHH1jOpCzb0zDbfytgA9LcN/hzb2l7WQSQnxITOVx5un/wGw==",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist-node/bin/uuid"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/yaml": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.9.0.tgz",
      "integrity": "sha512-2AvhNX3mb8zd6Zy7INTtSpl1F15HW6Wnqj0srWlkKLcpYl/gMIMJiyuGq2KeI2YFxUPjdlB+3Lc10seMLtL4cA==",
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/eemeli"
      }
    },
    "node_modules/zod": {
      "version": "4.1.8",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.1.8.tgz",
      "integrity": "sha512-5R1P+WwQqmmMIEACyzSvo4JXHY5WiAFHRMg+zBZKgKS+Q1viRa0C1hmUKtHltoIFKtIdki3pRxkmpP74jnNYHQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```

---

## .kilo\package.json
```json
{
  "dependencies": {
    "@kilocode/plugin": "7.3.0"
  }
}

```

---

## app\globals.css
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  /* Harisa Brand Colors - Black, White, Blue only */
  --blue-primary: #2563EB;
  --blue-light: #EEF3FF;
  --blue-dark: #1E40AF;
  --white: #FFFFFF;
  --off-white: #F8F7F4;
  --surface: #F2F0EB;
  --text-primary: #1A1A1A;
  --text-muted: #6B7280;
  --border-light: rgba(0,0,0,0.06);
  
  /* Semantic tokens */
  --background: #F8F7F4;
  --foreground: #1A1A1A;
  --card: #FFFFFF;
  --card-foreground: #1A1A1A;
  --popover: #FFFFFF;
  --popover-foreground: #1A1A1A;
  --primary: #2563EB;
  --primary-foreground: #FFFFFF;
  --secondary: #EEF3FF;
  --secondary-foreground: #2563EB;
  --muted: #F2F0EB;
  --muted-foreground: #6B7280;
  --accent: #2563EB;
  --accent-foreground: #FFFFFF;
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: rgba(0,0,0,0.06);
  --input: rgba(0,0,0,0.06);
  --ring: #2563EB;
  --radius: 1rem;
}

@theme inline {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 8px);
  
  /* Custom brand colors for Tailwind */
  --color-blue-primary: #2563EB;
  --color-blue-light: #EEF3FF;
  --color-blue-dark: #1E40AF;
  --color-off-white: #F8F7F4;
  --color-surface: #F2F0EB;
  --color-text-primary: #1A1A1A;
  --color-text-muted: #6B7280;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Scroll reveal animation base */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Glass card effect */
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

/* Standard card */
.standard-card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

/* Blue accent card */
.blue-accent-card {
  background: #2563EB;
  color: white;
}

```

---

## app\icon.svg
```xml
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#2563EB"/>
  <path d="M10 22V10H12V14.5C12 15.8333 13.5 17 15.5 17C17.5 17 19 15.8333 19 14.5V10H21V22H19V17.5C19 16.1667 17.5 15 15.5 15C13.5 15 12 16.1667 12 17.5V22H10Z" fill="white"/>
</svg>

```

---

## app\layout.tsx
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Harisa — Живой арабский для мусульман',
  description: 'Арабский язык через живую практику и игры. Говоришь с первого урока. Школа арабского для русскоязычных мусульман в Бишкеке.',
  keywords: ['арабский язык', 'бишкек', 'мусульмане', 'обучение', 'harisa'],
}

export const viewport = {
  themeColor: '#F8F7F4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-off-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

```

---

## app\page.tsx
```tsx
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { MissionQuote } from '@/components/mission-quote'
import { CoreUSPs } from '@/components/core-usps'
import { HowLessonWorks } from '@/components/how-lesson-works'
import { ThreeGames } from '@/components/three-games'
import { LessonFormat } from '@/components/lesson-format'
import { Teacher } from '@/components/teacher'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { AvailableSlots } from '@/components/available-slots'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <MissionQuote />
      <CoreUSPs />
      <HowLessonWorks />
      <ThreeGames />
      <LessonFormat />
      <Teacher />
      <AvailableSlots />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

```

---

## components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}

```

---

## components\available-slots.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal } from './reveal';

interface Slot {
  id: string;
  schedule_type: string;
  description?: string;
  time_start?: string;
  price?: number;
  gender: 'male' | 'female' | 'mixed';
  max_students: number;
  current_students: number;
  is_open: boolean;
  name: string; // Used as course name fallback
  courses?: { title: string } | null;
}

export function AvailableSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeGender, setActiveGender] = useState<'male' | 'female' | 'all'>('all');

  useEffect(() => {
    async function fetchSlots() {
      try {
        const { data, error } = await supabase
          .from('slots')
          .select('id, name, schedule_type, description, time_start, price, gender, max_students, current_students, is_open, courses(title)')
          .order('schedule_type', { ascending: true });

        if (error) {
          console.error('Error fetching slots:', error);
          return;
        }

        if (data && data.length > 0) {
          setSlots(data);
          // Auto-select gender tab based on available slots if there's only one gender
          const hasMale = data.some(s => s.gender === 'male');
          const hasFemale = data.some(s => s.gender === 'female');
          if (hasMale && !hasFemale) setActiveGender('male');
          else if (!hasMale && hasFemale) setActiveGender('female');
          else if (hasMale && hasFemale) setActiveGender('male'); // Default to male if both exist
        } else {
          // Fallback MVP slots if DB is empty
          setSlots([
            { id: '1', name: 'Арабский язык с нуля', schedule_type: 'Пн / Ср / Пт', time_start: '18:00', price: 3000, gender: 'male', max_students: 12, current_students: 5, is_open: true },
            { id: '2', name: 'Арабский язык с нуля', schedule_type: 'Вт / Чт / Сб', time_start: '18:00', price: 3000, gender: 'female', max_students: 12, current_students: 12, is_open: false },
            { id: '3', name: 'Арабский язык с нуля', schedule_type: 'Пн / Ср / Пт', time_start: '20:00', price: 3000, gender: 'male', max_students: 12, current_students: 11, is_open: true },
          ]);
          setActiveGender('male');
        }
      } catch (err) {
        console.error('Failed to fetch slots:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSlots();
  }, []);

  // Filter slots based on the active gender toggle
  const filteredSlots = slots.filter(s => activeGender === 'all' ? true : s.gender === activeGender);
  
  // Group slots by course name
  const groupedSlots = filteredSlots.reduce((acc, slot) => {
    // If the slot is linked to a course, use course title. Otherwise fallback to 'Общий курс'
    const courseName = slot.courses?.title || 'Общий курс';
    if (!acc[courseName]) acc[courseName] = [];
    acc[courseName].push(slot);
    return acc;
  }, {} as Record<string, Slot[]>);

  // Check if we need a toggle
  const hasMale = slots.some(s => s.gender === 'male');
  const hasFemale = slots.some(s => s.gender === 'female');
  const showToggle = hasMale && hasFemale;

  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6 relative overflow-hidden" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-primary mb-4">
              Выберите удобное расписание
            </h2>
            <p className="text-blue-primary/60 text-sm md:text-base">
              Бронируйте место прямо сейчас. Новые группы стартуют в начале каждого месяца.
            </p>
          </Reveal>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-blue-primary/20 border-t-blue-primary rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(groupedSlots).map(([courseName, courseSlots]) => (
              <div key={courseName} className="flex flex-col gap-8">
                
                {/* 1. Header (Pricing / Course Info) */}
                <Reveal>
                  <div className="blue-accent-card rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full mb-4 border border-white/20">
                          Первый модуль — 3 месяца
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{courseName}</h3>
                        
                        <div className="flex items-baseline gap-2 mt-4 mb-6">
                          <span className="text-5xl font-semibold text-white leading-none">
                            {courseSlots[0].price ? courseSlots[0].price.toLocaleString() : '3 000'}
                          </span>
                          <span className="text-white/80 text-lg">сом / мес</span>
                        </div>

                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <span>Живые уроки 3 раза в неделю</span>
                          </li>
                          <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <span>Все игры и домашние задания включены</span>
                          </li>
                          <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                            <span>До 1 000 сом скидка за Динары каждый месяц</span>
                          </li>
                        </ul>
                      </div>

                      {/* 2. Gender Toggle */}
                      {showToggle && (
                        <div className="shrink-0 flex flex-col items-start md:items-end w-full md:w-auto mt-6 md:mt-0">
                          <p className="text-white/70 text-sm mb-3">Выберите группу:</p>
                          <div className="bg-black/20 backdrop-blur-md p-1.5 rounded-full flex items-center border border-white/10 w-full md:w-auto">
                            <button
                              onClick={() => setActiveGender('male')}
                              className={`flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeGender === 'male' ? 'bg-white text-blue-primary shadow-md' : 'text-white/70 hover:text-white'
                              }`}
                            >
                              Для братьев
                            </button>
                            <button
                              onClick={() => setActiveGender('female')}
                              className={`flex-1 md:flex-none px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeGender === 'female' ? 'bg-white text-blue-primary shadow-md' : 'text-white/70 hover:text-white'
                              }`}
                            >
                              Для сестёр
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>

                {/* 3. Slot Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <AnimatePresence mode="popLayout">
                    {courseSlots.map((slot, idx) => {
                      const isFull = slot.current_students >= slot.max_students || !slot.is_open;
                      const seatsLeft = slot.max_students - slot.current_students;
                      const isAlmostFull = seatsLeft <= 2 && !isFull;

                      return (
                        <motion.div
                          key={slot.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className={`bg-white rounded-3xl p-6 border ${
                            isFull ? 'border-slate-200 opacity-60 grayscale' : 'border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 hover:shadow-blue-900/10'
                          } transition-all duration-300 relative flex flex-col`}
                        >
                          <div className="flex justify-between items-start mb-5">
                            <div>
                              <h4 className="text-xl font-bold text-slate-800">{slot.schedule_type}</h4>
                              <div className="flex items-center gap-2 text-slate-500 mt-2 font-medium">
                                <Clock className="w-4 h-4" />
                                <span>{slot.description || slot.time_start || 'Время уточняется'}</span>
                              </div>
                            </div>
                            
                            {/* Scarcity Badge */}
                            <div className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-bold ${
                              isFull ? 'bg-slate-100 text-slate-500' :
                              isAlmostFull ? 'bg-red-50 text-red-600 border border-red-100' : 
                              'bg-green-50 text-green-600 border border-green-100'
                            }`}>
                              {isFull ? (
                                <>Мест нет</>
                              ) : (
                                <>
                                  <Users className="w-3.5 h-3.5" />
                                  Занято: {slot.current_students} из {slot.max_students}
                                </>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            {isFull ? (
                              <button disabled className="w-full py-4 px-6 bg-slate-100 text-slate-400 rounded-2xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                                Набор закрыт
                              </button>
                            ) : (
                              <a 
                                href={`https://harisa.site/login?slot=${slot.id}`}
                                className="w-full py-4 px-6 bg-blue-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/30 group/btn"
                              >
                                Записаться на это время
                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                  
                  {courseSlots.length === 0 && (
                    <div className="col-span-1 md:col-span-2 text-center py-10 bg-white/50 rounded-3xl border border-slate-100">
                      <p className="text-slate-500 font-medium">Нет доступных слотов для выбранной категории</p>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

```

---

## components\core-usps.tsx
```tsx
"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'

function SpeechBubbleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function GameIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}

function GroupIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function CoreUSPs() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <StaggerContainer>
          <StaggerItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
              Почему harisa
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-text-muted text-base md:text-lg mb-10">
              Три вещи, которых нет больше нигде
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Row 1: Large blue card + small white card */}
        <div className="grid md:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-6">
          <Reveal className="md:col-span-3">
            <div className="blue-accent-card rounded-2xl p-6 md:p-8 h-full min-h-[240px] md:min-h-[280px] flex flex-col">
              <SpeechBubbleIcon className="w-7 h-7 text-white/90 mb-5" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Говоришь с первого урока
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-auto">
                Никаких лекций. 80% занятия — ты говоришь, слышишь, отвечаешь на арабском.
              </p>
              <span className="inline-block bg-white/20 text-white text-[13px] font-medium px-4 py-1.5 rounded-full w-fit mt-5">
                Живая практика
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="standard-card rounded-2xl p-6 md:p-8 h-full min-h-[240px] md:min-h-[280px] flex flex-col">
              <GameIcon className="w-7 h-7 text-blue-primary mb-5" />
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
                Групповые тренажёры
              </h3>
              <p className="text-text-muted text-base leading-relaxed mb-auto">
                Три авторских игры — каждая заточена под одно: чтобы ты думал, реагировал и говорил на арабском, а не вспоминал правила.
              </p>
              <span className="inline-block bg-blue-light text-blue-primary text-[13px] font-medium px-4 py-1.5 rounded-full w-fit mt-5">
                3 авторские игры
              </span>
            </div>
          </Reveal>
        </div>

        {/* Row 2: Full-width glass card */}
        <Reveal delay={0.2}>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-3">
                  <GroupIcon className="w-7 h-7 text-blue-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
                      Не курс. Среда.
                    </h3>
                    <p className="text-text-muted text-base leading-relaxed">
                      Весь формат заточен под живое взаимодействие. Единомышленники находят друг друга, практикуются вместе — и растут быстрее, чем в одиночку. Учитель направляет, группа тянет вперёд.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-block bg-blue-light text-blue-primary text-[13px] font-medium px-4 py-1.5 rounded-full w-fit">
                  Сообщество
                </span>
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-blue-light border-2 border-white flex items-center justify-center text-blue-primary text-sm font-medium">А</div>
                  <div className="w-9 h-9 rounded-full bg-surface border-2 border-white flex items-center justify-center text-text-muted text-sm font-medium">М</div>
                  <div className="w-9 h-9 rounded-full bg-blue-primary border-2 border-white flex items-center justify-center text-white text-sm font-medium">И</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

```

---

## components\faq.tsx
```tsx
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './reveal'

const faqs = [
  {
    question: "Подойдёт ли мне, если я с нуля?",
    answer: "Да! Курс создан специально для начинающих. Мы начинаем с алфавита и базовых звуков, постепенно переходя к словам и фразам через игры и практику."
  },
  {
    question: "Сколько времени нужно в день?",
    answer: "45 минут на урок (3 раза в неделю) + около 15-20 минут на домашние мини-игры. Итого: около 3 часов в неделю для стабильного прогресса."
  },
  {
    question: "Что если я пропущу урок?",
    answer: "Записи всех уроков доступны в личном кабинете. Но живое участие — основа метода, поэтому мы рекомендуем выбирать группу под ваше расписание."
  },
  {
    question: "Когда стартует следующий поток?",
    answer: "Потоки стартуют в начале каждого месяца. Запишись сейчас — и мы добавим тебя в ближайшую группу."
  },
  {
    question: "Кто преподаёт?",
    answer: "Носители языка и опытные преподаватели с педагогическим образованием, прошедшие обучение методике harisa."
  },
  {
    question: "Есть ли группы для детей?",
    answer: "Пока нет, но мы работаем над адаптацией программы для детей 10-14 лет. Оставьте заявку, и мы сообщим о запуске."
  }
]

function ChevronIcon({ className = "", isOpen = false }: { className?: string; isOpen?: boolean }) {
  return (
    <motion.svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <StaggerContainer>
          <StaggerItem>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-10 text-center">
              Вопросы
            </h2>
          </StaggerItem>
        </StaggerContainer>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-b border-black/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-base font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronIcon className="w-5 h-5 text-text-muted shrink-0" isOpen={openIndex === i} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

```

---

## components\final-cta.tsx
```tsx
"use client"

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { StaggerContainer, StaggerItem } from './reveal'
import { OrnamentCorner } from './harisa-ornament'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="contact" className="relative bg-transparent py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-[60vh] flex items-center">
      <OrnamentCorner position="top-left" delay={0.2} trigger={isInView ? 'animate' : undefined} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      <OrnamentCorner position="top-right" delay={0.2} trigger={isInView ? 'animate' : undefined} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      <OrnamentCorner position="bottom-left" delay={0.2} trigger={isInView ? 'animate' : undefined} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      <OrnamentCorner position="bottom-right" delay={0.2} trigger={isInView ? 'animate' : undefined} className="w-[42vw] h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[21vw] lg:h-[21vw] opacity-50" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          <StaggerItem>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-text-primary leading-[1.1] tracking-[-0.03em] text-balance mb-6">
              Начни говорить на арабском уже в этом месяце
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base md:text-lg text-text-muted font-normal mb-10 max-w-xl mx-auto">
              Новый поток стартует в начале каждого месяца. Группы небольшие — запись закрывается при наборе.
            </p>
          </StaggerItem>

           <StaggerItem>
             <a
               href="https://t.me/harisa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-blue-primary font-medium px-8 py-3.5 rounded-full text-base hover:bg-gray-900 transition-colors shadow-lg shadow-black/20"
            >
              Занять место
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
```

---

## components\footer.tsx
```tsx
function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-off-white py-10 px-4 md:px-6 border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div>
            <span className="text-blue-primary font-semibold text-xl">harisa</span>
            <p className="text-text-muted text-sm mt-1">
              Живой арабский с первого урока
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <a 
              href="https://t.me/harisa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-blue-primary hover:bg-blue-light transition-colors"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/harisa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-blue-primary hover:bg-blue-light transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/996700000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-blue-primary hover:bg-blue-light transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} harisa. Бишкек, Кыргызстан.
          </p>
          <a 
            href="/privacy" 
            className="text-text-muted text-sm hover:text-text-primary transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

```

---

## components\harisa-ornament.tsx
```tsx
"use client"

import { motion } from 'framer-motion'

interface HarisaOrnamentProps {
  className?: string
  delay?: number
  color?: string
  trigger?: 'animate' | 'whileInView'
}

export function HarisaOrnament({ 
  className = "", 
  delay = 0, 
  color = "#2563EB",
  trigger = 'whileInView'
}: HarisaOrnamentProps) {

  const animationProps = trigger === 'animate'
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
      }
    : trigger === 'whileInView'
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true },
      }
    : {
        initial: { pathLength: 0, opacity: 0 },
      }

  return (
    <svg
      viewBox="0 0 185.33791 187.69976"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <g transform="matrix(-0.84353932,0,0,0.84353932,-175.39664,60.520565)">
        <g transform="matrix(0.6707326,0.7503564,-0.7503564,0.6707326,42.513597,174.5527)">
          <g transform="rotate(45.000473,-296.2444,144.71822)">
            <motion.path
              d="m -366.12299,98.228003 c -8.83446,-2.887301 -37.66536,10.318727 0.557,44.451207 l -32.37845,-31.40799 m 195.58897,-0.59045 c -6.05219,6.49503 -12.84245,9.2997 -26.86581,2.65706 -14.02336,-6.64265 -26.76773,3.67202 -26.76773,3.67202 18.49122,-8.44529 33.82735,3.79801 23.07737,14.33692 m -95.09259,20.2925 c 1.08587,-0.52122 -8.13519,25.70744 8.27775,35.05318 14.24722,8.11255 35.0344,-0.39563 38.20275,-11.89921 2.39139,-8.6826 1.85661,-21.79547 -14.19555,-21.91961 -12.30894,-0.0952 -17.43205,9.92636 -12.98099,17.10332 3.32272,5.35764 12.40974,6.24173 13.79287,2.48412 1.56886,-4.26219 -1.40987,-6.97043 -3.73448,-5.91379 m -64.02274,-20.14385 c 0,0 28.72739,26.4912 70.80422,-21.11319 20.36843,-23.04419 41.23289,-10.56997 43.01998,4.45758 2.94743,24.78484 -21.82238,23.06429 -26.73176,16.95084 -6.90661,-8.60052 -1.25489,-15.66892 4.42844,-16.82803 5.24967,-1.07066 9.25139,1.96169 8.2664,5.01889 -0.52968,1.64401 -3.35786,2.5259 -4.72366,2.0666 m -79.4173,-28.27739 c 24.39096,8.24757 20.14702,32.39369 3.69115,31.67251 -12.42453,-0.5445 -12.20172,-11.71714 -8.62027,-15.02433 4.23903,-3.91443 10.12589,0.81859 5.07753,4.24849 m -15.79473,16.82803 c -14.57091,-16.12857 -7.82813,-40.36569 19.4851,-37.49403 20.35356,2.13994 29.81808,24.7992 44.57951,1.18091 m -112.2401,32.85554 c -2.88745,-8.83441 10.31811,-37.66553 44.45122,0.55627 l -31.40853,-32.37793 m -0.58722,195.58898 c 6.49493,-6.0523 9.29949,-12.84261 2.65662,-26.86586 -6.64288,-14.02325 3.67158,-26.76779 3.67158,-26.76779 -8.44499,18.49136 3.79857,33.82729 14.3373,23.07714 m 20.29093,-95.09293 c -0.5212,1.08588 25.7073,-8.13561 35.05331,8.27717 8.11279,14.24709 -0.39505,35.03441 -11.89857,38.20295 -8.68256,2.39153 -21.79544,1.85697 -21.91985,-14.19519 -0.0954,-12.30894 9.92607,-17.43221 17.10311,-12.98127 5.35769,3.32263 6.24193,12.40964 2.48434,13.79283 -4.26216,1.56893 -6.97045,-1.40976 -5.91385,-3.73438 m -20.1449,-64.02241 c 0,0 26.49167,28.72695 -21.11203,70.80457 -23.04385,20.36881 -10.56928,41.23306 4.4583,43.0199 24.78488,2.94702 23.06392,-21.82276 16.95039,-26.73204 -8.60063,-6.90647 -15.66894,-1.25463 -16.82795,4.42872 -1.07058,5.24969 1.96184,9.25136 5.01902,8.26632 1.644,-0.52971 2.52585,-3.3579 2.06653,-4.7237 m -28.27871,-79.41683 c 8.24798,24.39082 32.39403,20.14649 31.67257,3.69063 -0.5447,-12.42452 -11.71734,-12.20153 -15.02447,-8.62002 -3.91436,4.23909 0.81876,10.12587 4.24858,5.07746 m 16.82777,-15.79501 c -16.12881,-14.57065 -40.36582,-7.82747 -37.49371,19.48572 2.14027,20.35352 24.79969,29.81767 1.18164,44.57949"
              stroke={color}
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              {...animationProps}
              transition={{
                pathLength: { duration: 5, delay, ease: "easeInOut" },
                opacity: { duration: 0.1, delay }
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export function OrnamentCorner({ 
  position, 
  delay = 0,
  trigger = 'whileInView',
  className = "w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] opacity-50"
}: { 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  delay?: number
  trigger?: 'animate' | 'whileInView'
  className?: string
}) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-[-1]'
  }

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none`}>
      <HarisaOrnament 
        className={className}
        delay={delay}
        color="#2563EB"
        trigger={trigger}
      />
    </div>
  )
}
```

---

## components\header.tsx
```tsx
"use client"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        <span className="text-blue-primary font-semibold text-4xl tracking-tight">
          harisa
        </span>
        <a
          href="#pricing"
          className="bg-blue-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-dark transition-colors"
        >
          Записаться
        </a>
      </div>
    </header>
  )
}

```

---

## components\hero.tsx
```tsx
"use client"

import { Reveal, StaggerContainer, StaggerItem } from './reveal'
import { OrnamentCorner } from './harisa-ornament'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-light/40 via-off-white to-off-white py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-[85vh] flex items-center">
      <OrnamentCorner position="top-left" delay={0.2} trigger="animate" />
      <OrnamentCorner position="top-right" delay={0.2} trigger="animate" />
      <OrnamentCorner position="bottom-left" delay={0.2} trigger="animate" />
      <OrnamentCorner position="bottom-right" delay={0.2} trigger="animate" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          <StaggerItem>
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-semibold text-text-primary leading-[1.1] tracking-[-0.03em] text-balance mb-6">
              Арабский как его впитывали веками
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base md:text-lg text-text-muted font-normal mb-10 max-w-xl">
              Живым, а не в учебнике.
            </p>
          </StaggerItem>

           <StaggerItem>
             <div className="flex flex-col sm:flex-row items-center gap-4">
               <a
                 href="#pricing"
                className="w-full sm:w-auto bg-black text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-gray-900 transition-colors shadow-lg shadow-black/25"
              >
                Занять место
               </a>
               <a
                 href="#contact"
                className="text-text-muted text-base hover:text-text-primary transition-colors"
              >
                Написать нам →
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
```

---

## components\how-lesson-works.tsx
```tsx
"use client"

import { Reveal } from './reveal'

const steps = [
  {
    title: "Warm-up",
    duration: "7 МИН",
    description: "Блиц по прошлому занятию"
  },
  {
    title: "Theory Drop",
    duration: "13 МИН",
    description: "4–5 слов через образы на доске"
  },
  {
    title: "Grand Game",
    duration: "20 МИН",
    description: "Живая игра со всей группой"
  },
  {
    title: "Wrap-up",
    duration: "5 МИН",
    description: "Динары + домашнее задание"
  }
]

export function HowLessonWorks() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-16">
            Как устроен урок
          </h2>
        </Reveal>

        {/* Stepper & Cards - Desktop */}
        <div className="hidden md:block">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="flex items-center justify-between mb-6 px-4 md:px-8">
                {steps.map((_, i) => (
                  <div key={i} className="flex items-center flex-1 last:flex-none">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-primary text-blue-primary flex items-center justify-center text-lg md:text-xl font-semibold bg-white shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex-1 h-0 border-t-2 border-dashed border-blue-primary/40 mx-2 md:mx-4" />
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4">
                {steps.map((step, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl p-5 shadow-sm border border-black/[0.04]"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-blue-primary font-medium text-sm mb-2">
                      {step.duration}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stepper & Cards - Mobile */}
        <div className="md:hidden">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  {/* Vertical Line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[23px] top-12 bottom-0 w-px border-l-2 border-dashed border-blue-primary/40" />
                  )}
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full border-2 border-blue-primary text-blue-primary flex items-center justify-center text-lg font-semibold bg-white shrink-0 z-10">
                    {i + 1}
                  </div>
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/[0.04] flex-1">
                    <h3 className="text-base font-semibold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-blue-primary font-medium text-sm mb-2">
                      {step.duration}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

```

---

## components\lesson-format.tsx
```tsx
"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function VideoIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function GamepadIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="13" r="1" />
      <circle cx="18" cy="11" r="1" />
      <rect x="2" y="6" width="20" height="12" rx="3" />
    </svg>
  )
}

function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="12 6 14 10 18 10 15 13 16 17 12 15 8 17 9 13 6 10 10 10 12 6" />
    </svg>
  )
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const formats = [
  {
    icon: VideoIcon,
    title: "Онлайн · Живые уроки",
    description: "Собственная платформа — разработана так, чтобы связь была стабильной даже без высокоскоростного интернета. Работает с телефона. Никаких сбоев посреди урока."
  },
  {
    icon: CalendarIcon,
    title: "3 раза в неделю",
    description: "45 минут. Расписание фиксируется при записи и не меняется весь модуль."
  },
  {
    icon: GamepadIcon,
    title: "Домашнее задание",
    description: "3 авто-игры после каждого урока — прямо в платформе. Без скучных упражнений."
  },
  {
    icon: CoinIcon,
    title: "Динары",
    description: "Внутренняя валюта за активность. Накопил — получил скидку до 1 000 сом на следующий месяц."
  },
  {
    icon: ShieldCheckIcon,
    title: "Smart Exam",
    description: "Каждый 12-й урок — срез знаний с учителем из другой группы. Объективно по конструкции."
  }
]

export function LessonFormat() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      
      // Calculate scroll progress within the section
      const scrolledIntoSection = -rect.top
      const scrollableHeight = sectionHeight - viewportHeight
      
      if (scrolledIntoSection < 0) {
        setCurrentIndex(0)
        return
      }
      
      if (scrolledIntoSection > scrollableHeight) {
        setCurrentIndex(formats.length - 1)
        return
      }
      
      // Map scroll progress to card index
      const progress = scrolledIntoSection / scrollableHeight
      const newIndex = Math.min(
        Math.floor(progress * formats.length),
        formats.length - 1
      )
      setCurrentIndex(newIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const CardContent = ({ index }: { index: number }) => {
    const format = formats[index]
    const Icon = format.icon
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="w-full max-w-[520px] bg-white rounded-3xl border border-black/[0.07] p-10 md:p-12"
        style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-light flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-blue-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
          {format.title}
        </h3>
        <p className="text-text-muted text-base md:text-lg leading-relaxed">
          {format.description}
        </p>
      </motion.div>
    )
  }

  // Mobile: horizontal swipe carousel
  if (isMobile) {
    return (
      <section className="bg-off-white py-16 px-4">
        <h2 className="text-2xl font-semibold text-text-primary mb-8 text-center">
          Формат
        </h2>
        
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4" style={{ width: `${formats.length * 85}%` }}>
            {formats.map((format, i) => {
              const Icon = format.icon
              return (
                <div 
                  key={i} 
                  className="snap-center shrink-0 w-[85vw] max-w-[320px]"
                >
                  <div className="bg-white rounded-2xl border border-black/[0.07] p-6" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
                    <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {format.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Dots indicator for mobile */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {formats.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-blue-primary w-6' 
                  : 'bg-black/20 w-2'
              }`}
            />
          ))}
        </div>
      </section>
    )
  }

  // Desktop: sticky scroll hijack
  return (
    <section 
      ref={sectionRef}
      className="relative bg-off-white"
      style={{ height: `${formats.length * 100}vh` }}
    >
      <div 
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Counter */}
        <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2">
          <span className="text-text-muted text-sm font-medium tracking-wide">
            {String(currentIndex + 1).padStart(2, '0')} / {String(formats.length).padStart(2, '0')}
          </span>
        </div>

        {/* Section title */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
            Формат
          </h2>
        </div>

        {/* Card */}
        <div className="flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <CardContent index={currentIndex} />
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {formats.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-blue-primary w-6' 
                  : 'bg-black/20 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

```

---

## components\mission-quote.tsx
```tsx
"use client"

import { Reveal } from './reveal'
import { OrnamentDivider } from './ornaments'

export function MissionQuote() {
  return (
    <section className="bg-off-white py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <OrnamentDivider className="w-40 h-6 mx-auto mb-8 opacity-15" color="#2563EB" />
        </Reveal>
        
        <Reveal delay={0.1}>
          <blockquote className="text-lg md:text-xl font-normal italic text-text-primary leading-relaxed">
            «Мы соединили мудрость традиции с лёгкостью технологий —
            чтобы этот путь стал не бременем, а радостью открытия»
          </blockquote>
        </Reveal>
        
        <Reveal delay={0.2}>
          <OrnamentDivider className="w-40 h-6 mx-auto mt-8 opacity-15" color="#2563EB" />
        </Reveal>
      </div>
    </section>
  )
}

```

---

## components\ornaments.tsx
```tsx
export function GulPattern({ className = "", color = "#2563EB" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Eight-pointed star / Kyrgyz gul pattern */}
      <g fill={color}>
        {/* Center diamond */}
        <path d="M50 35 L65 50 L50 65 L35 50 Z" />
        {/* Four outer points */}
        <path d="M50 10 L55 30 L50 35 L45 30 Z" />
        <path d="M90 50 L70 55 L65 50 L70 45 Z" />
        <path d="M50 90 L45 70 L50 65 L55 70 Z" />
        <path d="M10 50 L30 45 L35 50 L30 55 Z" />
        {/* Four diagonal points */}
        <path d="M75 25 L60 40 L55 35 L65 25 Z" />
        <path d="M75 75 L60 60 L65 55 L75 65 Z" />
        <path d="M25 75 L40 60 L45 65 L35 75 Z" />
        <path d="M25 25 L40 40 L35 45 L25 35 Z" />
      </g>
    </svg>
  )
}

export function OrnamentDivider({ className = "", color = "#2563EB" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 200 28" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        {/* Left line */}
        <rect x="0" y="13" width="70" height="2" rx="1" />
        {/* Center medallion */}
        <path d="M100 4 L108 12 L100 20 L92 12 Z" />
        <circle cx="100" cy="12" r="4" />
        {/* Small diamonds */}
        <path d="M80 12 L84 16 L80 20 L76 16 Z" />
        <path d="M120 12 L124 16 L120 20 L116 16 Z" />
        {/* Right line */}
        <rect x="130" y="13" width="70" height="2" rx="1" />
      </g>
    </svg>
  )
}

export function BackgroundPattern({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="gulPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Simplified gul motif */}
          <path 
            d="M50 25 L60 50 L50 75 L40 50 Z" 
            fill="currentColor" 
          />
          <path 
            d="M25 50 L50 40 L75 50 L50 60 Z" 
            fill="currentColor"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#gulPattern)" />
    </svg>
  )
}

```

---

## components\reveal.tsx
```tsx
"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

```

---

## components\stats-bar.tsx
```tsx
"use client"

import { Reveal } from './reveal'

const stats = [
  { number: "80%", label: "урока — практика" },
  { number: "60", label: "слов в месяц" },
  { number: "3", label: "месяца" },
  { number: "3 000", label: "сом/мес" },
]

export function StatsBar() {
  return (
    <section className="py-8 px-4 md:px-6">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg shadow-black/[0.04] px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center relative">
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-black/[0.06]" />
                  )}
                  <p className="text-3xl md:text-4xl font-semibold text-blue-primary leading-tight">
                    {stat.number}
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

```

---

## components\teacher.tsx
```tsx
"use client"

import { Reveal } from './reveal'

export function Teacher() {
  return (
    <section className="bg-off-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-12">
            Ваш учитель
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/[0.04]
                          flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            
            {/* Фото-заглушка */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden 
                              bg-surface border-2 border-blue-light flex items-center justify-center">
                <span className="text-text-muted text-sm text-center px-4">Здесь будет<br/>твоё фото</span>
              </div>
            </div>

            {/* Текст */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
                Имя Фамилия
              </h3>
              
              <blockquote className="text-base md:text-lg italic text-text-muted 
                                     leading-relaxed mb-6">
                «Я создал Harisa, потому что сам прошёл через боль скучных 
                учебников. Арабский — живой язык, и учить его нужно живым. 
                Наша методика — это то, чего мне не хватало, когда я начинал.»
              </blockquote>

              <ul className="space-y-3 text-sm md:text-base text-text-muted">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-primary shrink-0" />
                  Основатель Harisa и автор методики
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-primary shrink-0" />
                  X лет изучения и преподавания арабского
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-primary shrink-0" />
                  Создатель игровой системы обучения
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

```

---

## components\theme-provider.tsx
```tsx
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

---

## components\three-games.tsx
```tsx
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from './reveal'

const games = [
  {
    number: "01",
    title: "Арабский Миллионер",
    description: "Один отвечает. Остальные делают ставки Динарами. Потом — блиц для всех одновременно.",
    image: "/placeholder-game-1.png"
  },
  {
    number: "02",
    title: "Крокодил / Элиас",
    description: "Один объясняет слово. Платформа диктует каждому условие: «используй цвет» или «задай вопрос».",
    image: "/placeholder-game-2.png"
  },
  {
    number: "03",
    title: "Шпион 2.0",
    description: "11 знают слово, один — нет. Каждый называет ассоциацию за 5 секунд. Шпион может перехватить банк.",
    image: "/placeholder-game-3.png"
  }
]

export function ThreeGames() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-3">
            Три игры, которых нет нигде
          </h2>
          <p className="text-text-muted text-center text-base md:text-lg mb-10">
            Пока один отвечает — остальные 11 тоже в деле
          </p>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="relative">
            {/* Card container with content */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* Title and description block */}
                  <div className="bg-white rounded-2xl p-5 md:p-6 mb-4 border border-black/[0.06]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-primary flex items-center justify-center shrink-0">
                        <span className="text-base font-semibold text-white">
                          {games[currentIndex].number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                          {games[currentIndex].title}
                        </h3>
                        <p className="text-text-muted text-sm md:text-base leading-relaxed">
                          {games[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image placeholder - separate block */}
                  <div className="aspect-[16/10] bg-surface rounded-2xl flex items-center justify-center border border-black/[0.06]">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-text-muted text-sm">Скриншот игры</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation row - below the card */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:border-blue-primary/20 transition-colors"
                aria-label="Previous game"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {games.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex 
                        ? 'bg-blue-primary w-6' 
                        : 'bg-black/20 hover:bg-black/30 w-2'
                    }`}
                    aria-label={`Go to game ${i + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-text-primary hover:bg-blue-light hover:border-blue-primary/20 transition-colors"
                aria-label="Next game"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

```

---

## deployment.md
```markdown
> **ИНСТРУКЦИЯ К ФАЙЛУ:**
> Здесь хранится информация о процессах деплоя проекта Harisa Website, хостинге, CI/CD конвейерах и возможных проблемах при развертывании.

# 🚀 Harisa Website Deployment Guide

В этом документе описан процесс деплоя лендинга (**Vercel**).

## 1. Деплой Frontend-части (Next.js на Vercel)

Сайт хостится на платформе **Vercel** на тарифе **Hobby**. Деплой происходит автоматически через интеграцию с GitHub.

### Основной флоу:
1. Вы вносите изменения в код локально.
2. Сохраняете изменения и коммитите их в git.
3. Делаете `git push` в ветку `main` репозитория `taulujas-png/harisa-website`.
4. Vercel ловит вебхук от GitHub и автоматически начинает сборку (Build) и деплой (Deployment). Процесс занимает ~1-2 минуты.

## 2. Технический аудит и контекст для ИИ

Для того чтобы ИИ-ассистент понимал текущую структуру и контент сайта, рекомендуется поддерживать актуальность файлов в корне проекта. В данном проекте основная логика и тексты сосредоточены в папке `components/`.

## 3. Возможные проблемы (Troubleshooting)

*   **Ошибка: Deployment Blocked (Hobby teams do not support collaboration)**
    *   *Причина:* Vercel на тарифе Hobby блокирует деплой, если email гит-коммита не совпадает с email'ом владельца привязанного GitHub аккаунта.
    *   *Решение:*
        1. Проверьте ваш локальный email командой: `git config user.email`. Он **обязательно** должен совпадать с вашей почтой, привязанной к GitHub (`taulu.jas@gmail.com`).
        2. Если почта не совпадает, перенастройте локальный git:
           ```bash
           git config user.email "taulu.jas@gmail.com"
           git config user.name "taulujas"
           ```
        3. Если ошибочный коммит уже отправлен (и заблокирован), перепишите его автора и отправьте форсом:
           ```bash
           git commit --amend --reset-author --no-edit
           git push origin main --force
           ```
*   **Ручной деплой (альтернатива GitHub):** Если интеграция с GitHub сломалась, можно задеплоить проект напрямую из терминала с помощью Vercel CLI:
    ```bash
    npx vercel --prod --yes
    ```
*   **Ошибка: Root Directory**
    *   *Причина:* В отличие от старой структуры, теперь код приложения находится прямо в корне репозитория.
    *   *Решение:* В настройках Vercel → **Settings** → **General** → **Root Directory** должно быть пусто (или стоять `./`). Если там указано `harisa-app`, удалите это значение.

---
*Последнее обновление: 18 мая 2026 г.*

```

---

## harisa ornament.svg
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="185.33791mm"
   height="187.69975mm"
   viewBox="0 0 185.33791 187.69976"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:version="1.4.2 (f4327f4, 2025-05-13)"
   sodipodi:docname="harisa ornament.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="0.44809905"
     inkscape:cx="223.16495"
     inkscape:cy="213.12252"
     inkscape:window-width="1366"
     inkscape:window-height="705"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g21"><inkscape:page
       x="0"
       y="0"
       width="185.33791"
       height="187.69977"
       id="page34"
       margin="0"
       bleed="0" /></sodipodi:namedview><defs
     id="defs1" /><g
     inkscape:label="Слой 1"
     inkscape:groupmode="layer"
     id="layer1"><g
       id="g16"
       transform="matrix(-0.84353932,0,0,0.84353932,-175.39664,60.520565)"><g
         id="g34"
         transform="matrix(0.6707326,0.7503564,-0.7503564,0.6707326,42.513597,174.5527)"
         style="stroke:#4283e5;stroke-opacity:1"><g
           id="g15"
           transform="matrix(-0.70710094,0.70711262,0.70711262,0.70710094,-703.81581,251.86598)"
           style="stroke:#4283e5;stroke-opacity:1" /><g
           id="g21"
           transform="rotate(45.000473,-296.2444,144.71822)"
           style="stroke:#4283e5;stroke-opacity:1"><path
             id="path21"
             style="fill:none;stroke:#4283e5;stroke-width:10.465;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
             d="m -366.12299,98.228003 c -8.83446,-2.887301 -37.66536,10.318727 0.557,44.451207 l -32.37845,-31.40799 m 195.58897,-0.59045 c -6.05219,6.49503 -12.84245,9.2997 -26.86581,2.65706 -14.02336,-6.64265 -26.76773,3.67202 -26.76773,3.67202 18.49122,-8.44529 33.82735,3.79801 23.07737,14.33692 m -95.09259,20.2925 c 1.08587,-0.52122 -8.13519,25.70744 8.27775,35.05318 14.24722,8.11255 35.0344,-0.39563 38.20275,-11.89921 2.39139,-8.6826 1.85661,-21.79547 -14.19555,-21.91961 -12.30894,-0.0952 -17.43205,9.92636 -12.98099,17.10332 3.32272,5.35764 12.40974,6.24173 13.79287,2.48412 1.56886,-4.26219 -1.40987,-6.97043 -3.73448,-5.91379 m -64.02274,-20.14385 c 0,0 28.72739,26.4912 70.80422,-21.11319 20.36843,-23.04419 41.23289,-10.56997 43.01998,4.45758 2.94743,24.78484 -21.82238,23.06429 -26.73176,16.95084 -6.90661,-8.60052 -1.25489,-15.66892 4.42844,-16.82803 5.24967,-1.07066 9.25139,1.96169 8.2664,5.01889 -0.52968,1.64401 -3.35786,2.5259 -4.72366,2.0666 m -79.4173,-28.27739 c 24.39096,8.24757 20.14702,32.39369 3.69115,31.67251 -12.42453,-0.5445 -12.20172,-11.71714 -8.62027,-15.02433 4.23903,-3.91443 10.12589,0.81859 5.07753,4.24849 m -15.79473,16.82803 c -14.57091,-16.12857 -7.82813,-40.36569 19.4851,-37.49403 20.35356,2.13994 29.81808,24.7992 44.57951,1.18091 m -112.2401,32.85554 c -2.88745,-8.83441 10.31811,-37.66553 44.45122,0.55627 l -31.40853,-32.37793 m -0.58722,195.58898 c 6.49493,-6.0523 9.29949,-12.84261 2.65662,-26.86586 -6.64288,-14.02325 3.67158,-26.76779 3.67158,-26.76779 -8.44499,18.49136 3.79857,33.82729 14.3373,23.07714 m 20.29093,-95.09293 c -0.5212,1.08588 25.7073,-8.13561 35.05331,8.27717 8.11279,14.24709 -0.39505,35.03441 -11.89857,38.20295 -8.68256,2.39153 -21.79544,1.85697 -21.91985,-14.19519 -0.0954,-12.30894 9.92607,-17.43221 17.10311,-12.98127 5.35769,3.32263 6.24193,12.40964 2.48434,13.79283 -4.26216,1.56893 -6.97045,-1.40976 -5.91385,-3.73438 m -20.1449,-64.02241 c 0,0 26.49167,28.72695 -21.11203,70.80457 -23.04385,20.36881 -10.56928,41.23306 4.4583,43.0199 24.78488,2.94702 23.06392,-21.82276 16.95039,-26.73204 -8.60063,-6.90647 -15.66894,-1.25463 -16.82795,4.42872 -1.07058,5.24969 1.96184,9.25136 5.01902,8.26632 1.644,-0.52971 2.52585,-3.3579 2.06653,-4.7237 m -28.27871,-79.41683 c 8.24798,24.39082 32.39403,20.14649 31.67257,3.69063 -0.5447,-12.42452 -11.71734,-12.20153 -15.02447,-8.62002 -3.91436,4.23909 0.81876,10.12587 4.24858,5.07746 m 16.82777,-15.79501 c -16.12881,-14.57065 -40.36582,-7.82747 -37.49371,19.48572 2.14027,20.35352 24.79969,29.81767 1.18164,44.57949" /></g></g></g></g></svg>

```

---

## hooks\use-mobile.ts
```typescript
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

```

---

## hooks\use-scroll-reveal.ts
```typescript
"use client"

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold])

  return { ref, isVisible }
}

```

---

## hooks\use-toast.ts
```typescript
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }

```

---

## lib\supabase.ts
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

```

---

## lib\utils.ts
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

---

## next-env.d.ts
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---

## next.config.mjs
```tsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

```

---

## package.json
```json
{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.12",
    "@radix-ui/react-alert-dialog": "1.1.15",
    "@radix-ui/react-aspect-ratio": "1.1.8",
    "@radix-ui/react-avatar": "1.1.11",
    "@radix-ui/react-checkbox": "1.3.3",
    "@radix-ui/react-collapsible": "1.1.12",
    "@radix-ui/react-context-menu": "2.2.16",
    "@radix-ui/react-dialog": "1.1.15",
    "@radix-ui/react-dropdown-menu": "2.1.16",
    "@radix-ui/react-hover-card": "1.1.15",
    "@radix-ui/react-label": "2.1.8",
    "@radix-ui/react-menubar": "1.1.16",
    "@radix-ui/react-navigation-menu": "1.2.14",
    "@radix-ui/react-popover": "1.1.15",
    "@radix-ui/react-progress": "1.1.8",
    "@radix-ui/react-radio-group": "1.3.8",
    "@radix-ui/react-scroll-area": "1.2.10",
    "@radix-ui/react-select": "2.2.6",
    "@radix-ui/react-separator": "1.1.8",
    "@radix-ui/react-slider": "1.3.6",
    "@radix-ui/react-slot": "1.2.4",
    "@radix-ui/react-switch": "1.2.6",
    "@radix-ui/react-tabs": "1.1.13",
    "@radix-ui/react-toast": "1.2.15",
    "@radix-ui/react-toggle": "1.1.10",
    "@radix-ui/react-toggle-group": "1.1.11",
    "@radix-ui/react-tooltip": "1.2.8",
    "@supabase/supabase-js": "^2.110.1",
    "@vercel/analytics": "1.6.1",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.6.0",
    "framer-motion": "^12.38.0",
    "input-otp": "1.4.2",
    "lucide-react": "^0.564.0",
    "next": "16.2.6",
    "next-themes": "^0.4.6",
    "react": "^19",
    "react-day-picker": "9.13.2",
    "react-dom": "^19",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.0",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5",
    "tailwindcss": "^4.2.0",
    "tw-animate-css": "1.3.3",
    "typescript": "5.7.3"
  }
}

```

---

## pnpm-workspace.yaml
```tsx
allowBuilds:
  sharp: set this to true or false

```

---

## postcss.config.mjs
```tsx
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config

```

---

## public\icon.svg
```xml
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @media (prefers-color-scheme: light) {
      .background { fill: black; }
      .foreground { fill: white; }
    }
    @media (prefers-color-scheme: dark) {
      .background { fill: white; }
      .foreground { fill: black; }
    }
  </style>
  <g clip-path="url(#clip0_7960_43945)">
    <rect class="background" width="180" height="180" rx="37" />
    <g style="transform: scale(95%); transform-origin: center">
      <path class="foreground"
        d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z" />
      <path class="foreground"
        d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_7960_43945">
      <rect width="180" height="180" fill="white" />
    </clipPath>
  </defs>
</svg>
```

---

## public\placeholder-logo.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" fill="none"><path fill="#000" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.486-7.72.12 3.4c.534-1.227 1.307-2.173 2.32-2.84 1.04-.693 2.267-1.04 3.68-1.04 1.494 0 2.76.387 3.8 1.16 1.067.747 1.827 1.813 2.28 3.2.507-1.44 1.294-2.52 2.36-3.24 1.094-.747 2.414-1.12 3.96-1.12 1.414 0 2.64.307 3.68.92s1.84 1.52 2.4 2.72c.56 1.2.84 2.667.84 4.4V38h-4.96V25.92c0-1.813-.293-3.187-.88-4.12-.56-.96-1.413-1.44-2.56-1.44-.906 0-1.68.213-2.32.64-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.84-.48 3.04V38h-4.56V25.92c0-1.2-.133-2.213-.4-3.04-.24-.827-.626-1.453-1.16-1.88-.506-.427-1.133-.64-1.88-.64-.906 0-1.68.227-2.32.68-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.827-.48 3V38h-4.96V16.8h4.48Zm26.723 10.6c0-2.24.427-4.187 1.28-5.84.854-1.68 2.067-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.84 0 3.494.413 4.96 1.24 1.467.827 2.64 2.08 3.52 3.76.88 1.653 1.347 3.693 1.4 6.12v1.32h-15.08c.107 1.813.614 3.227 1.52 4.24.907.987 2.134 1.48 3.68 1.48.987 0 1.88-.253 2.68-.76a4.803 4.803 0 0 0 1.84-2.2l5.08.36c-.64 2.027-1.84 3.64-3.6 4.84-1.733 1.173-3.733 1.76-6 1.76-2.08 0-3.906-.453-5.48-1.36-1.573-.907-2.786-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84Zm15.16-2.04c-.213-1.733-.76-3.013-1.64-3.84-.853-.827-1.893-1.24-3.12-1.24-1.44 0-2.6.453-3.48 1.36-.88.88-1.44 2.12-1.68 3.72h9.92ZM163.139 9.6V38h-5.04V9.6h5.04Zm8.322 7.2.24 5.88-.64-.36c.32-2.053 1.094-3.56 2.32-4.52 1.254-.987 2.787-1.48 4.6-1.48 2.32 0 4.107.733 5.36 2.2 1.254 1.44 1.88 3.387 1.88 5.84V38h-4.96V25.92c0-1.253-.12-2.28-.36-3.08-.24-.8-.64-1.413-1.2-1.84-.533-.427-1.253-.64-2.16-.64-1.44 0-2.573.48-3.4 1.44-.8.933-1.2 2.307-1.2 4.12V38h-4.96V16.8h4.48Zm30.003 7.72c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.443 8.16V38h-5.6v-5.32h5.6Z"/><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>
```

---

## public\placeholder.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
```

---

## styles\globals.css
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

---

## tsconfig.json
```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

---

