Forked from [original repository](https://github.com/APIDevTools/json-schema-ref-parser).<br>
[Fixed objects extension that were cached during dereferencing](https://github.com/x-DeH4uK-x/json-schema-ref-parser/commit/5f402a723304a6d85680246befd1e57b31f27811).<br>
Reason why pull request was not made is because:<br>
`that extended objects are not allowed by the JSON Schema or JSON Reference specs. The json-schema-ref-parser library only supports them for backward-compatibility, and it's possible that this support will be removed at some point in the future to bring this library inline with the official spec` (https://github.com/APIDevTools/json-schema-ref-parser/issues/92).
