import React from 'react';
import { connect } from 'react-redux';

import getItem from '../../actions/getItem'


class AllItems extends React.Component {

    componentDidMount(){
        this.props.getItem()
    }

    render(props) {
        const hey = this.props.items
        return (
            <div className='AllItems'>
                <h1>AllItems</h1>{console.log(hey)}
{this.props.items&&this.props.items.map(item=>(<div>{item.title}</div>))}

            </div>
        );
    }
}

// Inyectamos estas props a APP para poder leer del estado
const mapStateToProps = state => ({
    items: state.items.items,///cambiar

})
// Inyectamos estas props a APP que son metodos que alteran el estado 
// en este caso al menos, son los encargados de hacer llamadas a a las apis.
const mapDispatchToProps = dispatch => ({
    getItem: (tag) => dispatch(getItem(tag))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllItems);