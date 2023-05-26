import { PropsWithChildren } from 'react';
import { NonIndexRouteObject } from 'react-router-dom';

export interface AuthRouteObject extends NonIndexRouteObject {
  layout?: (props: PropsWithChildren) => JSX.Element;
  children?: AuthRouteObject[];
  child?: AuthRouteObject;
  title?: string;
}
