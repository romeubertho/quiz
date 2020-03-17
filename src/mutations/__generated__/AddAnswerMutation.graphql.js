/**
 * @flow
 * @relayHash 1b65b505d1f803b68d481baaddaba26d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnswerInput = {|
  answer: string
|};
export type AddAnswerMutationVariables = {|
  _qid: string,
  input?: ?AnswerInput,
|};
export type AddAnswerMutationResponse = {|
  +addAnswer: ?{|
    +_id: string,
    +answer: string,
  |}
|};
export type AddAnswerMutation = {|
  variables: AddAnswerMutationVariables,
  response: AddAnswerMutationResponse,
|};
*/


/*
mutation AddAnswerMutation(
  $_qid: ID!
  $input: AnswerInput
) {
  addAnswer(_qid: $_qid, input: $input) {
    _id
    answer
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "_qid",
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
    "name": "addAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_qid",
        "variableName": "_qid"
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
    "name": "AddAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddAnswerMutation",
    "id": null,
    "text": "mutation AddAnswerMutation(\n  $_qid: ID!\n  $input: AnswerInput\n) {\n  addAnswer(_qid: $_qid, input: $input) {\n    _id\n    answer\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94e8c74d798bb38535ae679119e12a8d';

module.exports = node;
