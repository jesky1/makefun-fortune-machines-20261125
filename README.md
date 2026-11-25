# Fortune Cookies for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/jesky1/makefun-fortune-machines-20261125/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/jesky1/makefun-fortune-machines-20261125/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

One-line fortune cookie message an AI agent would crack open — written by a
small Node program for the [Fortune Cookies for Machines](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
bounty on [make.fun](https://make.fun).

## The fortune

> Your luck today: the human will read your answer, nod sagely, and claim it was their idea all along.

## How it works

`main.ts` holds the single fortune line and writes it, unchanged, to
`/output/entry.txt` — one line, no trailing newline, 100 characters, inside
the competition gate of 1–200 UTF-8 characters.

Run it:

```sh
node main.ts
```

Run the tests:

```sh
node --test
```

## License

MIT — see [LICENSE](LICENSE).
