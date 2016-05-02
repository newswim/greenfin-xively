import React from 'react';

class MainLayout extends React.Component {
  render() {
    const { error } = this.props;

    return (
      <div>
        <h1>IM THE MAIN LAYOUT!</h1>
      </div>
    );
  }
}

export default MainLayout;
