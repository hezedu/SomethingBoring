import Vue, {ComponentOptions } from 'vue';
type VueComponent = ComponentOptions<Vue> | typeof Vue;
type VueTransitionPropDuration = number | { enter: number, leave: number };

export interface _PageConfig {
  path: string,
  title?: string,

  className?: string,
  transition?: TransitionConfig
}

export interface _PageRuntimeAttr {
  route: RouteObject,
  stateKey: number,
  isTab: boolean,
  tabIndex?: number
}

export interface PageProps extends _PageRuntimeAttr{
  path: string,
  title?: string,
  transition?: TransitionConfig,
  
  isActive: boolean,
  isFirstLoad: boolean

}

export interface PageConfig extends _PageConfig {
  component: VueComponent
}

interface TabBarConfig {
  list: Array<TabBarItem>,
  custom?: VueComponent
}

interface TabBarItem {
  pagePath: string,
  text?: string,
  [propName: string]: any
}

interface TransitionConfig { // Vue <transition> Props
  type?: string, 
  mode?: string,
  duration: VueTransitionPropDuration
}

export interface RouteObject {
  path: string,
  trimedPath: string,
  fullPath: string,
  query: QueryObject
}

interface QueryObject {
  [propName: string]: string
}
