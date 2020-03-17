/**
 * @flow
 * @relayHash 671a6b6962f3e3583b8498a99fba9e55
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnswerInput = {|
  answer: string
|};
export type UpdateAnswerMutationVariables = {|
  _id: string,
  input?: ?AnswerInput,
|};
export type UpdateAnswerMutationResponse = {|
  +updateAnswer: ?{|
    +_id: string,
    +answer: string,
  |}
|};
export type UpdateAnswerMutation = {|
  variables: UpdateAnswerMutationVariables,
  response: UpdateAnswerMutationResponse,
|};
*/


/*
mutation UpdateAnswerMutation(
  $_id: ID!
  $input: AnswerInput
) {
  updateAnswer(_id: $_id, input: $input) {
    _id
    answer
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
  },
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AnswerInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Answer",
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
        "name": "answer",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateAnswerMutation",
    "id": null,
    "text": "mutation UpdateAnswerMutation(\n  $_id: ID!\n  $input: AnswerInput\n) {\n  updateAnswer(_id: $_id, input: $input) {\n    _id\n    answer\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb99273654cb5bcfc367f54af1407dbc';

module.exports = node;
