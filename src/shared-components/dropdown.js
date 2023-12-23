
import React from 'react';
import styles from './dropdown.css';
import { useState } from 'react';
export class Dropdown extends React.Component {
    dataList = [];
    sendDataToParent = () => {};
    switchVisibility = () => {};
    constructor(props) {
        super();
        if (props.dataList && Array.isArray(props.dataList)) {
            this.dataList = props.dataList;
        }
        this.state = {
            dropdownVisible: false,
            currentlyChosen: "None"
        };
        if (props.optionChosen) {
            this.setState({ sendDataToParent: props.optionChosen });
        }
        if (props.value) {
            this.setState({ currentlyChosen: props.value });
        }
    }

    render() {
        return (<>
            <div onClick={ () =>  { this.setState({ dropdownVisible: !this.state.dropdownVisible}) } } className='dropdown-box'>
                { this.state.currentlyChosen }
            </div>
            <div className='dropdown-list-container' style={ { display: this.state.dropdownVisible ? "block" : "none" } } >
                {
                    this.dataList.map((listItem, listItemIndex) => {
                        return (
                            <>
                                <div onClick = { () => { 
                                            if(listItem.SelectValue) {
                                                this.setState({ currentlyChosen: listItem.SelectValue, dropdownVisible: false });
                                            }
                                            this.sendDataToParent(listItem, listItemIndex);
                                        } 
                                    } className='dropdown-list-item'>{ listItem.DisplayValue }
                                </div>
                            </>
                        );
                    })
                }
                
            </div>
        </>);
    };
}