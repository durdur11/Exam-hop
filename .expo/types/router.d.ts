/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/custom_quiz`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/mistakes`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/quizzes`; params?: Router.UnknownInputParams; } | { pathname: `/script`; params?: Router.UnknownInputParams; } | { pathname: `/settings`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/custom_quiz`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/mistakes`; params?: Router.UnknownOutputParams; } | { pathname: `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `/quizzes`; params?: Router.UnknownOutputParams; } | { pathname: `/script`; params?: Router.UnknownOutputParams; } | { pathname: `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/custom_quiz${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/mistakes${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `/quizzes${`?${string}` | `#${string}` | ''}` | `/script${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/custom_quiz`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/mistakes`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/quizzes`; params?: Router.UnknownInputParams; } | { pathname: `/script`; params?: Router.UnknownInputParams; } | { pathname: `/settings`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
