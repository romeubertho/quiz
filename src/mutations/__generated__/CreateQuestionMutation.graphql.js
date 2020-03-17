/**
 * @flow
 * @relayHash 3b77fc6335af85aa01ff33d988b0b032
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionInput = {|
  title: string
|};
export type CreateQuestionMutationVariables = {|
  input?: ?QuestionInput
|};
export type CreateQuestionMutationResponse = {|
  +createQuestion: ?{|
    +_id: string,
    +title: string,
    +answers: $ReadOnlyArray<{|
      +answer: string
    |}>,
  |}
|};
export type CreateQuestionMutation = {|
  variables: CreateQuestionMutationVariables,
  response: CreateQuestionMutationResponse,
|};
*/


/*
mutation CreateQuestionMutation(
  $input: QuestionInput
) {
  createQuestion(input: $input) {
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
    "name": "input",
    "type": "QuestionInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createQuestion",
    "storageKey": null,
    "args": [
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
    "name": "CreateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateQuestionMutation",
    "id": null,
    "text": "mutation CreateQuestionMutation(\n  $input: QuestionInput\n) {\n  createQuestion(input: $input) {\n    _id\n    title\n    answers {\n      answer\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'afaa24ab24792c78d5c38cfa3dcbe280';

module.exports = node;
