import React, { Component } from 'react';
import ProjectList from './projects/projectList';
import { connect } from 'react-redux';
import CreateProject from './projects/createProject';

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    console.log(projects)
    return (
      <div className="dashbord container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <CreateProject/>
          </div>
        </div>
      </div>
    );
  }
}

// тут забираем все данные из хранилища
const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard); // не забудьте заасунуть в connect (state action)

// все те компоненты ы кого есть коннект к store являются container

// а все те которые получают от родителей компоненты