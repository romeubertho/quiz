/**
 * @flow
 * @relayHash 3974b0dc56a9e4f9685ffeb31812ae0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAnswerMutationVariables = {|
  _id: string,
  _qid: string,
|};
export type DeleteAnswerMutationResponse = {|
  +deleteAnswer: ?{|
    +_id: string
  |}
|};
export type DeleteAnswerMutation = {|
  variables: DeleteAnswerMutationVariables,
  response: DeleteAnswerMutationResponse,
|};
*/


/*
mutation DeleteAnswerMutation(
  $_id: ID!
  $_qid: ID!
) {
  deleteAnswer(_id: $_id, _qid: $_qid) {
    _id
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
    "name": "_qid",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "_qid",
        "variableName": "_qid"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteAnswerMutation",
    "id": null,
    "text": "mutation DeleteAnswerMutation(\n  $_id: ID!\n  $_qid: ID!\n) {\n  deleteAnswer(_id: $_id, _qid: $_qid) {\n    _id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fc4941627ef74a715c8999e27042294d';

module.exports = node;
