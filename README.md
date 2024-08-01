JavaScript client for Apiary cache server

## Installation

```bash
npm install @hiveops/apiary
# or
deno add @hiveops/apiary
```

## Usage

```TypeScript
import { Entry, getClient } from '@hiveops/apiary';

const client = getClient({
    baseUrl: "http://localhost:2468",
});

const entries: Entry[] = [
    new Entry({
        key: "key1",
        value: textEncoder.encode("value1"),
    }),
    new Entry({
        key: "key2",
        value: textEncoder.encode("value2"),
    }),
];

const setEntryResponse = await client.setEntries({
    keyspace,
    entries,
});
console.log(setEntryResponse);


const getEntriesResponse = await client.getEntries({
    keyspace,
    keys: entries.map((entry) => entry.key),
});
console.log(getEntriesResponse);

```