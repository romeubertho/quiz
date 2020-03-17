/**
 * @flow
 * @relayHash 21a3a96d750de41c01c96279f1b0b182
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteQuestionMutationVariables = {|
  _id: string
|};
export type DeleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +_id: string,
    +title: string,
    +answers: $ReadOnlyArray<{|
      +answer: string
    |}>,
  |}
|};
export type DeleteQuestionMutation = {|
  variables: DeleteQuestionMutationVariables,
  response: DeleteQuestionMutationResponse,
|};
*/


/*
mutation DeleteQuestionMutation(
  $_id: ID!
) {
  deleteQuestion(_id: $_id) {
    _id
    title
    answers {
      answer
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "concreteType": "Question",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
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
    "name": "DeleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteQuestionMutation",
    "id": null,
    "text": "mutation DeleteQuestionMutation(\n  $_id: ID!\n) {\n  deleteQuestion(_id: $_id) {\n    _id\n    title\n    answers {\n      answer\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cce66eedeeb16c7f3fad8adc3e7b99bb';

module.exports = node;
