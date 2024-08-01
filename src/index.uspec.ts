import { faker } from "@faker-js/faker";
import { Entry } from "./pb/apiary/v1/models_pb";
import { getClient } from "./index";

describe("Apiary Client", () => {
    const client = getClient({
        baseUrl: "http://localhost:2468",
    });

    const keyspace = faker.company.name();

    const textEncoder = new TextEncoder();

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
    const keys = entries.map((entry) => entry.key);
    const values = entries.map((entry) => entry.value);

    it("should get entries", async () => {
        const response = await client.getEntries({
            keyspace,
            keys: ["key1"],
        });
        expect(response).toBeDefined();
        expect(response.entries.length).toEqual(0);
        expect(response.notFound.length).toEqual(1);
    });

    it("should set entries", async () => {
        const response = await client.setEntries({
            keyspace,
            entries,
        });
        expect(response).toBeDefined();
        expect(response.successful.length).toEqual(2);
        expect(response.failed.length).toEqual(0);
    });

    it("should get entries - non-empty", async () => {
        const response = await client.getEntries({
            keyspace,
            keys: [keys[0], "invalid-key"],
        });
        expect(response).toBeDefined();
        expect(response.entries.length).toEqual(1);
        expect(response.notFound.length).toEqual(1);
    });

    it("should delete entries", async () => {
        const response = await client.deleteEntries({
            keyspace,
            keys: [keys[0]],
        });
        expect(response).toBeDefined();
        expect(response.successful.length).toEqual(1);
        expect(response.failed.length).toEqual(0);

        const response2 = await client.getEntries({
            keyspace,
            keys,
        });
        expect(response2).toBeDefined();
        expect(response2.entries.length).toEqual(1);
        expect(response2.notFound.length).toEqual(1);
    });

    it("should clear entries", async () => {
        const response = await client.clearEntries({
            keyspace,
        });
        expect(response).toBeDefined();
        expect(response.successful).toBeTruthy();

        const response2 = await client.getEntries({
            keyspace,
            keys,
        });
        expect(response2).toBeDefined();
        expect(response2.entries.length).toEqual(0);
        expect(response2.notFound.length).toEqual(2);
    });
});
