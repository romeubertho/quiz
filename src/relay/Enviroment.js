import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
export const GRAPHQL_URL = 'http://localhost:4300/graphql';

const fetchQuery = async(operation,variables)=>{
    const headers={
        Accept:'application/json',
        'Content-type':'application/json'
    };
    const body = JSON.stringify({
        query:operation.text,
        variables,
    });
    const response = await fetch(GRAPHQL_URL,{
        method:'POST',
        headers:headers,
        body:body
    });
    // console.log(await response.json());
    return await response.json();
};

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;