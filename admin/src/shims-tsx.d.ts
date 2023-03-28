import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

import {AxiosInstance} from 'axios';

declare module 'vue/types/vue' {
  interface Vue{
    $http: AxiosInstance
  }
}