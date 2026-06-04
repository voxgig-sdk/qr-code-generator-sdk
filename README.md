# QrCodeGenerator SDK

Generate QR codes from arbitrary data at a configurable pixel size via a single HTTP GET

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About QR Code Generator

The QR Code Generator API is a small public service hosted at [api.apgy.in](https://api.apgy.in) that turns arbitrary input data into a QR code image. It is catalogued on [Free Public APIs](https://freepublicapis.com/qr-code-generator) alongside other lightweight, no-key utility APIs.

What you get from the API:

- A single `GET /qr/` endpoint that returns a QR code rendered from the supplied `data` value
- A configurable output `size` so callers can request the pixel dimensions they need

Operational notes: the upstream service has been flagged as intermittently unreachable on community trackers, so callers should expect to handle network errors and consider caching generated codes. No authentication, licence, or rate-limit information is published.

## Try it

**TypeScript**
```bash
npm install qr-code-generator
```

**Python**
```bash
pip install qr-code-generator-sdk
```

**PHP**
```bash
composer require voxgig/qr-code-generator-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/qr-code-generator-sdk/go
```

**Ruby**
```bash
gem install qr-code-generator-sdk
```

**Lua**
```bash
luarocks install qr-code-generator-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { QrCodeGeneratorSDK } from 'qr-code-generator'

const client = new QrCodeGeneratorSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o qr-code-generator-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "qr-code-generator": {
      "command": "/abs/path/to/qr-code-generator-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Qrn** | Represents a generated QR code image produced from the supplied data and size, served by the `GET /qr/` endpoint. | `/qr/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from qrcodegenerator_sdk import QrCodeGeneratorSDK

client = QrCodeGeneratorSDK({})


# Load a specific qrn
qrn, err = client.Qrn(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'qrcodegenerator_sdk.php';

$client = new QrCodeGeneratorSDK([]);


// Load a specific qrn
[$qrn, $err] = $client->Qrn(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/qr-code-generator-sdk/go"

client := sdk.NewQrCodeGeneratorSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "QrCodeGenerator_sdk"

client = QrCodeGeneratorSDK.new({})


# Load a specific qrn
qrn, err = client.Qrn(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("qr-code-generator_sdk")

local client = sdk.new({})


-- Load a specific qrn
local qrn, err = client:Qrn(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = QrCodeGeneratorSDK.test()
const result = await client.Qrn().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = QrCodeGeneratorSDK.test(None, None)
result, err = client.Qrn(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = QrCodeGeneratorSDK::test(null, null);
[$result, $err] = $client->Qrn(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Qrn(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = QrCodeGeneratorSDK.test(nil, nil)
result, err = client.Qrn(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Qrn(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the QR Code Generator

- Upstream: [https://api.apgy.in](https://api.apgy.in)
- API docs: [https://freepublicapis.com/qr-code-generator](https://freepublicapis.com/qr-code-generator)

---

Generated from the QR Code Generator OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
