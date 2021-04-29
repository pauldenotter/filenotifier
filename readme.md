# File notifier
Get notified when a file is added to a directory you want to (recursively) watch.\
You can use glob patterns like `/home/johndoe/**/*.docx`\
This will find /home/johndoe/hello-world.docx, as well as /home/johndoe/deep/down/the/rabbit/hole/you-might-just-find-the-rabbit.docx\
See the [picomatch documentation](https://www.npmjs.com/package/picomatch) for more information

Simply run:
```bash
$ WEBHOOK_URL=https://hooks.slack.com/services/[REST_OF_THE_WEBHOOK_URL_YOU_RECEIVED] WATCH_PATH=/path/to/watch/**/*.txt filenotifier
```
Slack is just an example. This app sends a HTTP `POST` message containing a JSON object with a `"text"` property to the url you provide. Authorization, other message formats, etc. are not implemented. But feel free to modify the code to whatever you like.

## Make it portable
Run `$ npm run build` to create a portable (linux) version of your app.\
The binary files land in the `./dist` directory and are pretty heavy in file size, but this saves you from installing node.js.

Want a MacOS or Windows version?\
Add them to the `package.json -> pkg -> targets` array. Please refer to the [pkg documentation](https://www.npmjs.com/package/pkg) to learn more.
