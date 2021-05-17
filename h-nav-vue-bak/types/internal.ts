import { PageConfig, _PageRuntimeAttr, _PageConfig } from './interface';

interface _FormatedPageObject extends PageConfig {
  trimedPath: string,
  cmptKey: string,
  isTab: boolean
}

interface _StackPageObject  extends _PageRuntimeAttr , _PageConfig {
  stackId: number,
  cmptKey: string
}


interface _TabBarMap {
  [propName: string]: true
}
