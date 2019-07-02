import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    //console.log(this.props.libraries);

    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={() => uuid()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
  //console.log(state);
};

export default connect(mapStateToProps)(LibraryList);
