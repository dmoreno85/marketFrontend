import React from 'react';
import { connect } from 'react-redux';

import getItem from '../../redux/actions/getItem'


class AllItems extends React.Component {

    componentDidMount() {
        this.props.getItem()
    }

    render(props) {
        const hey = this.props.items
        return (
            <div className='AllItems'>
                <h1>AllItems</h1>{console.log(hey)}
                {this.props.items && this.props.items.map(item => (<div>{item.title}  </div>))}

            </div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.item.items,

})


const mapDispatchToProps = dispatch => ({
    getItem: (tag) => dispatch(getItem(tag))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllItems);