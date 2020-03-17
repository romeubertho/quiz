/**
 * @flow
 * @relayHash 02fc0c8dc15a19fda92552492b1c9e08
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionInput = {|
  title: string
|};
export type UpdateQuestionMutationVariables = {|
  _id: string,
  input?: ?QuestionInput,
|};
export type UpdateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +_id: string,
    +title: string,
    +answers: $ReadOnlyArray<{|
      +answer: string
    |}>,
  |}
|};
export type UpdateQuestionMutation = {|
  variables: UpdateQuestionMutationVariables,
  response: UpdateQuestionMutationResponse,
|};
*/


/*
mutation UpdateQuestionMutation(
  $_id: ID!
  $input: QuestionInput
) {
  updateQuestion(_id: $_id, input: $input) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "QuestionInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateQuestion",
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
    "name": "UpdateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateQuestionMutation",
    "id": null,
    "text": "mutation UpdateQuestionMutation(\n  $_id: ID!\n  $input: QuestionInput\n) {\n  updateQuestion(_id: $_id, input: $input) {\n    _id\n    title\n    answers {\n      answer\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f265aaae329367842f0bc4491572ec2';

module.exports = node;
