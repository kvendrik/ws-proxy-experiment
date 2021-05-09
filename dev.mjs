import DevServer from 'serve-dev';

new DevServer({
  root: './',
  port: 3000,
  watch: {
    paths: ['./'],
    onChange(filePath) {
      return {shouldReloadPage: true};
    }
  },
}).start()
