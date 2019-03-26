### Front-End Components

Collection of Front End components available on NPM, 
under the `@enso-ui` organization.

Select a component on the left to view more.

### Other Dependencies

Please note that many components use [axios](https://github.com/axios/axios) as an HTTP client
and [Font Awesome 5](https://fontawesome.com/) for icons.

Within Enso, axios is imported and available globally, Font Awesome is also available but you need to import
the icons you are using within your components.

Outside of Enso, when using any components that utilize the libraries above, you will need to make sure 
that these resources are available.

```js
import axios from 'axios';

window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
```

```js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('fa', FontAwesomeIcon);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSync, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faSync, faSearch);
```


