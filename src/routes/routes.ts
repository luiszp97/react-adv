import { lazy,  LazyExoticComponent } from "react";
import { NoLazyPage } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy( ()=> import(/* webpackChunkName: "Lazylayout"*/'../01-lazyload/layout/LazyLayout') )


export const routes: Route[] = [
    {
        path : '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazylayout'
    },
    {
        path : 'lazy3',
        to: '/lazy3',
        Component: NoLazyPage,
        name: 'Lazy-3'
    }
]