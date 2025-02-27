import React, { Component } from 'react';

type MyState={count:number}
class MainContent extends Component<{},MyState >{

    constructor(props:{}){
        super(props);
        this.state = {
            count:0

        }
    }

    handleIncrement=()=>{
        // this.setState({count: this.state.count+1})
    //   const count=this.state.count+1;
    //     this.setState({count})//attribute : property name 

    this.setState((prevState)=>{
        return {
            count:prevState.count+1
        }
        })
    }

    handleDecrement=()=>{
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
                }
             })
    }
    
    handleReset =()=>{
        this.setState({count:0})
        }


    render() {

        const{count}=this.state;

        return (
            <div>
                <h1>MainContent component</h1>
                <h2>Count : {count}</h2>
                <button onClick={this.handleIncrement} className='btn btn-primary'>Increment</button>
               
                <button onClick={this.handleDecrement} className='btn btn-primary'>Decrement</button>
               
                <button onClick={this.handleReset} className='btn btn-primary'>Reset</button>
                
            </div>
        );
    }
}

export default MainContent;