# Hi there!

I'm gonna keep this concise because you probably
don't wanna read a giant paragraph right now.
I have a few simple rules which I want you to follow,
if you don't then I'll close your PR (no exceptions).
Here:

1. No modifying `src/modules` or `src/index.ts`, any contributions you wanna make
   there should be made in [@beautify-lang/JavaScript](https://github.com/beautify-lang/javascript),
   I'll merge them into JavaScript, then that will be automatically merged into here.
2. Don't make any function or utility or class or tool or similar WITHOUT type annotations.
   I won't mind too much if you miss one `: string` somewhere, but please add them, as that is the whole point
   of this library. INFERENCE IS NOT ENOUGH. I WILL ASK YOU TO ADD TYPE ANNOTATIONS IF NOT PRESENT.
3. This library is licensed under Apache-2.0, any contribution of yours shall also be licensed under Apache-2.0
4. Tests aren't needed, just make sure it compiles (use `tsc` or `npm run testBuild`)
5. If you add a new feature, please add it to README.

> By the way, feel free to add your name to the CONTRIBUTORS.txt file, (format "Name (@githubhandle) (Year of contribution, if you contributed in multiple years, then add multiple, e.g. "2026, 2028, 2031")")

Quick Note: No, I'm not gonna be mad about stylistic choices... just keep it sane (no stuffing 500 lines into one), readable, and correct.
