# Angular Project with Dynamically Imported Components Example

This project is setup to show methods for dynamically importing components _without_ using Routes.

## `import-prototype`

This project uses an example to show that high-level imports won't work.  The `ChildProductionComponent` will not
render from `AppComponent`.  Due to the limited visibility and scope of `@ViewChild` and the component compilation
and injection, each component would require its own injection method to be called.

## `import-prototype-service`

This project uses a service to abstract the compilation away from the components, but the methods to load the
restricted components are still required to be called in each component's life-cycle.

# Resources and Related Discussions
* https://github.com/angular/angular-cli/issues/9343
* https://medium.com/@ckyidr9/lazy-load-feature-modules-without-routing-in-angular-9-ivy-220851cc7751

# Notes
* Source Code:
    * Although the components and controlling module are lazy-loaded, they still create JS files.  While
    these would not be visible/sent to the end user in a browser, they would be available in `/dist` deliverable.
