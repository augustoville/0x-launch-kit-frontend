# Add maxWorkers to command@08fb4aa

[Permalink](add-maxworkers-to-command-08fb4aa.md)

[Browse files](https://github.com/SwitchOS/switchdex/tree/08fb4aa71d5d964436d69aab2bd37408c84b9c83)

 Add maxWorkers to command

* Loading branch information

 [![@mariano-aguero](https://avatars2.githubusercontent.com/u/1144028?s=60&v=4)](https://github.com/mariano-aguero)

[mariano-aguero](https://github.com/SwitchOS/switchdex/commits?author=mariano-aguero) committedMay 7, 2019

 1 parent [89a0508](https://github.com/SwitchOS/switchdex/commit/89a0508c0917dd06b8a5a29563694843cf803bd9) commit 08fb4aa71d5d964436d69aab2bd37408c84b9c83

 [Unified](https://github.com/SwitchOS/switchdex/commit/08fb4aa71d5d964436d69aab2bd37408c84b9c83?branch=08fb4aa71d5d964436d69aab2bd37408c84b9c83&diff=unified) [Split](https://github.com/SwitchOS/switchdex/commit/08fb4aa71d5d964436d69aab2bd37408c84b9c83?branch=08fb4aa71d5d964436d69aab2bd37408c84b9c83&diff=split)

 Showing with **1 addition** and **1 deletion**.

1.  +1 −1 [.circleci/config.yml](add-maxworkers-to-command-08fb4aa.md#diff-78a8a19706dbd2a4425dd72bdab0502ed7a2cef16365ab7030a5a0588927bf47)

 2 [.circleci/config.yml](add-maxworkers-to-command-08fb4aa.md#diff-78a8a19706dbd2a4425dd72bdab0502ed7a2cef16365ab7030a5a0588927bf47)  Show comments [View file](https://github.com/SwitchOS/switchdex/blob/08fb4aa71d5d964436d69aab2bd37408c84b9c83/.circleci/config.yml)

|  | @@ -22,7 +22,7 @@ jobs: |  |
| :--- | :--- | :--- |
|  |  |  command: yarn run lint |
|  |  |  - run: |
|  |  |  name: Tests |
|  |  |  command: yarn run test-once |
|  |  |  command: yarn run test-once --maxWorkers 2 |
|  |  |  - run: |
|  |  |  name: Coveralls |
|  |  |  command: COVERALLS\_REPO\_TOKEN=${COVERALLS\_REPO\_TOKEN} && yarn run coveralls |

##  0 comments on commit `08fb4aa`

 Please [sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FSwitchOS%2Fswitchdex%2Fcommit%2F08fb4aa71d5d964436d69aab2bd37408c84b9c83) to comment.

