// import {commitMutation} from 'react-relay';
// import graphql from 'babel-plugin-relay/macro';
//
// const createQuestionMutation=graphql`
// mutation CreateQuestionMutation($input: createQuestion){
//     createQuestion(input: $input){
//         _id
//         title
//         answers{
//             answer
//         }
//     }
// }
// `;
//
// function commit(
//     environment,
//     complete,
//     question,
// ) {
//     return commitMutation(
//         environment,
//         {
//             createQuestionMutation,
//             variables: {
//                 input: {complete, id: question._id},
//             },
//         }
//     );
// }
//
// export default {commit};