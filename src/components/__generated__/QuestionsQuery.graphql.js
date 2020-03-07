/**
 * @flow
 * @relayHash 8bdf12b09d5c75973d8cbdcfcbf49c5b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionsQueryVariables = {||};
export type QuestionsQueryResponse = {|
  +allQuestions: $ReadOnlyArray<{|
    +_id: string,
    +title: string,
    +answers: $ReadOnlyArray<{|
      +_id: string,
      +answer: string,
    |}>,
  |}>
|};
export type QuestionsQuery = {|
  variables: QuestionsQueryVariables,
  response: QuestionsQueryResponse,
|};
*/


/*
query QuestionsQuery {
  allQuestions {
    _id
    title
    answers {
      _id
      answer
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allQuestions",
    "storageKey": null,
    "args": null,
    "concreteType": "Question",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "answers",
        "storageKey": null,
        "args": null,
        "concreteType": "Answer",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "answer",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionsQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "QuestionsQuery",
    "id": null,
    "text": "query QuestionsQuery {\n  allQuestions {\n    _id\n    title\n    answers {\n      _id\n      answer\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aeb0a290b9361d1365f12278b4fb8ace';

module.exports = node;
