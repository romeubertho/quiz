import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "../relay/Enviroment";


const mutation = graphql`
    mutation CreateQuestionMutation($input: QuestionInput){
        createQuestion(input: $input){
            _id
            title
            answers{
                answer
            }
        }
    }
`;

export async function createQuestion(title) {
    const variables = {
        input: {
            title
        }
    }
    return new Promise((resolve, reject) => {
        commitMutation(
            environment,
            {
                mutation,
                variables,
                onCompleted: (response, errors) => {
                    console.log(response);
                    resolve(response);
                },
                onError: err => {
                    console.log(err);
                    reject(err)
                }
            }
        );
    });
}

export default {createQuestion};