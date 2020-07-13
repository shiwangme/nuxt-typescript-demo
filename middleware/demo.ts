import { Middleware } from '@nuxt/types';

const myMiddleware: Middleware = (context) => {
  // Use context
  console.log(context);
};

export default myMiddleware;
