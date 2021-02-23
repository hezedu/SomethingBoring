
### RouteConfig.scrollBehavior
Added a fourth parameter: `isPop` ___boolean___ to distinguish some behaviors of browsers:  
  - If isPop is `true` it is triggered by back or forward, 
  - else it is triggered by replace or push.
  
I think it's useful.
You can use it like this: If isPop, return `savedPosition`, else scroll to top.