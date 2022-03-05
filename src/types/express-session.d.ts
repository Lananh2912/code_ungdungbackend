import { Session } from 'express-session';

export {};

declare module 'express-session' {
  interface Session {
    user: any;
  }
}
