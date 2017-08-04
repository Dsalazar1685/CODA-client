// import { arrayBufferToString } from './utils';

const url = 'http://localhost:3000'; // TODO per environment setup

export function getAllSymptoms() {
  return fetch(`${url}/symptoms`, { mode: 'cors' })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        console.warn(res);
        return [];
      }
    })
    // .then(agents => {
    //   agents.forEach(agent => {
    //     agent.commonName = agent.agent.commonName;
    //   });
    //   return agents;
    // })
    .catch(err => {
      console.warn(err);
      return [];
    });
}
