# The Vue Post
This is a technical assesment made by __Douglas Ramírez__ using __VueJS 3__ with *Options API*.

This app have the following features:
- __Two pages__:
  - _Home_: This page fetch the posts from the endpoint and shows them in a list. Each post could be clicked in order to read it.
  - _PostView_: This page shows the post content and allows to edit it (as a mock-up because the backend does not allows it). In addition, have an aside that shows the list of other posts made by the same author.
- __Pagination__: The Home page have a client-side reactive paginator, allowing the user to the more (or less) results per page.
- __Posts additional content__: The PostView page have an aside that shows the list of other posts made by the same author.

This app uses *Bootstrap 5.2* as the CSS framework for the styling, plus some scoped CSS inside the components.