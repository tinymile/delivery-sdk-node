# Node Delivery SDK

We provide an HTTP API to make it easier for new partners to quickly integrate with us and start sending delivery requests our way. While you can use our API directly by making raw HTTP requests to it, we also provide client libraries in some languages to speed up development.

For the full documentation of the API, please see https://external-api.prod.gcp.tinymile.ai/doc.

For the development version, see https://external-api.dev.gcp.tinymile.ai/doc . This is the version this repository is synchronized with.

# Basic usage

```javascript
import { Client } from "@tiny-mile/delivery-sdk"

const client = new Client({
    BASE: "https://external-api.dev.gcp.tinymile.ai",
    TOKEN: "your-api-key",
});

client.default.getJobsForOrder(...);
```
