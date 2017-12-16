import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import EditOaks from './Oaks';
import EditAgents from './Agents';
import EditSynonyms from './Synonyms';
import EditSymptoms from './Symptoms';
import EditReferences from './References';
import EditInteractions from './Interactions';

export default class Edit extends Component {
  render() {
    const {
      formattedOaks, fetchOaks, formattedAgents, fetchAgents, formattedSymptoms, fetchSymptoms, formattedReferences, fetchReferences,
    } = this.props;
    return (
      <div>
        <h2>Edit CODA</h2>
        <ul className="home-links">
          <li><Link to="/edit/oaks">Oaks</Link></li>
          <li><Link to="/edit/agents">Agents</Link></li>
          <li><Link to="/edit/synonyms">Synonyms</Link></li>
          <li><Link to="/edit/symptoms">Symptoms</Link></li>
          <li><Link to="/edit/references">References</Link></li>
          <li><Link to="/edit/interactions">Interactions</Link></li>
        </ul>
        <Switch>
          <Route path="/edit/oaks" render={() => <EditOaks options={formattedOaks} refresh={fetchOaks} />} />
          <Route path="/edit/agents" render={() => <EditAgents options={formattedAgents} refresh={fetchAgents} />} />
          <Route path="/edit/synonyms" render={() => <EditSynonyms options={formattedAgents} refresh={fetchAgents} />} />
          <Route path="/edit/symptoms" render={() => <EditSymptoms options={formattedSymptoms} refresh={fetchSymptoms} />} />
          <Route path="/edit/references" render={() => <EditReferences options={formattedReferences} refresh={fetchReferences} />} />
          <Route path="/edit/interactions" render={() => <EditInteractions agents={formattedAgents} oaks={formattedOaks} />} />
        </Switch>
      </div>
    );
  }
}

Edit.propTypes = {
  formattedOaks: PropTypes.array,
  fetchOaks: PropTypes.func,
  fetchAgents: PropTypes.func,
  formattedAgents: PropTypes.array,
  formattedSymptoms: PropTypes.array,
  fetchSymptoms: PropTypes.func,
  formattedReferences: PropTypes.array,
  fetchReferences: PropTypes.func,
};
