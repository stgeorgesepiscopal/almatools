

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/ryan/Projects/almaclassgrid/alma-class-grid/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/404.js'), universalOptions)
      t_0.template = '/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/404.js'
      
const t_1 = universal(import('/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/classgrid.js'), universalOptions)
      t_1.template = '/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/classgrid.js'
      
const t_2 = universal(import('/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/index.js'), universalOptions)
      t_2.template = '/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/index.js'
      

// Template Map
export default {
  '/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/404.js': t_0,
'/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/classgrid.js': t_1,
'/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/index.js': t_2
}
// Not Found Template
export const notFoundTemplate = "/home/ryan/Projects/almaclassgrid/alma-class-grid/src/pages/404.js"

