import ReactAutocomplete from 'react-autocomplete'
import React from 'react'


export default class MyInput extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }


  render() {
    return (
      <>
      <ReactAutocomplete
        items={this.props.suggestions}
        shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item}
        renderItem={(item, highlighted) =>
          <div
            key={item}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item}
          </div>
        }
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value }, this.props.handler(e.target.value))}
        onMenuVisibilityChange={() => this.props.handler(this.state.value)}
        onSelect={value => this.setState({ value }, this.props.handler(value)) }
        onClose={e => this.setState({ value: e.target.value }, this.props.handler(this.state.value))}
      
      />
      </>
    )
  }
}