import { createAction, nanoid } from "@reduxjs/toolkit";

export const example = createAction("example");

let action = example();
// action === { type: 'example' }

action = example(3);
// action === { type: 'example', payload: 3 }

const example2 = createAction("example2", function prepare(text) {
    return {
        payload: {
            text,
            id: nanoid(),
            createdAt: new Date().toISOString(),
        },
    };
});
console.log(example2("Write more docs"));
/**
 * {
 *   type: 'example2',
 *   payload: {
 *     text: 'Write more docs',
 *     id: '4AJvwMSWEHCchcWYga3dj',
 *     createdAt: '2019-10-03T07:53:36.581Z'
 *   }
 * }
 **/

// No creo que haga falta este formato usando RTK Query
