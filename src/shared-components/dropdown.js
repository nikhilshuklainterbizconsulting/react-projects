
import React from 'react';
import styles from './dropdown.css';
import { useState } from 'react';
export class Dropdown extends React.Component {
    dataList = [];
    sendDataToParent = () => { };
    switchVisibility = () => { };
    chooseNext = (next) => {
        const currentlyChosenIndex = this.dataList.findIndex(option => option.SelectValue == this.state.currentlyChosen);
        if (currentlyChosenIndex == -1) return;
        if (next) {
            if (this.dataList[currentlyChosenIndex + 1] && this.dataList[currentlyChosenIndex + 1].SelectValue) {
                this.setState({
                    currentlyChosen: this.dataList[currentlyChosenIndex + 1].SelectValue,
                    currentlyChosenDisplayValue: this.dataList[currentlyChosenIndex + 1].DisplayValue,
                });
            }
            else {
                if (this.dataList[0] && this.dataList[0].SelectValue) {
                    this.setState({
                        currentlyChosen: this.dataList[0].SelectValue,
                        currentlyChosenDisplayValue: this.dataList[0].DisplayValue,
                    });
                }
            }
            return;
        }

        if (this.dataList[currentlyChosenIndex -1] && this.dataList[currentlyChosenIndex -1].SelectValue) {
            this.setState({
                currentlyChosen: this.dataList[currentlyChosenIndex - 1].SelectValue,
                currentlyChosenDisplayValue: this.dataList[currentlyChosenIndex - 1].DisplayValue,
            });
        }
        else {
            if (this.dataList[this.dataList.length - 1] && this.dataList[this.dataList.length - 1].SelectValue) {
                this.setState({
                    currentlyChosen: this.dataList[this.dataList.length - 1].SelectValue,
                    currentlyChosenDisplayValue: this.dataList[this.dataList.length - 1].DisplayValue,
                });
            }
        }
    };
    constructor(props) {
        super();
        if (props.dataList && Array.isArray(props.dataList)) {
            this.dataList = props.dataList;
        }
        this.state = {
            dropdownVisible: false,
            currentlyChosen: null,
            currentlyChosenDisplayValue: "None"
        };
        if (props.optionChosen) {
            this.sendDataToParent = props.optionChosen;
            // this.setState({ sendDataToParent: props.optionChosen });
        }
        if (props.value) {
            this.setState({ currentlyChosen: props.value });
        }
    }

    render() {
        return (<>
            <div style={ { display: "inline-block", width: "15px", cursor: "pointer" } } onClick={() => {
                this.chooseNext(false)
            }} > 
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 20L8 12L16 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div style={ { display: "inline-block", width: "15px", cursor: "pointer" } } onClick={() => {
                this.chooseNext(true)
            }}>
                <svg width="15" height="15" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.09766 4L16.0977 12L8.09766 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
            </div>
            <div onClick={() => { this.setState({ dropdownVisible: !this.state.dropdownVisible }) }} className='dropdown-box'>
                { this.state.currentlyChosenDisplayValue }
                <div className='dropdown-list-container'
                    onMouseLeave={() => { this.setState({ dropdownVisible: false }); } }
                    style={{ display: this.state.dropdownVisible ? "block" : "none" }} >
                    {
                        this.dataList.map((listItem, listItemIndex) => {
                            return (
                                <>
                                    <div onClick={() => {
                                        if (listItem.SelectValue) {
                                            this.setState({ currentlyChosen: listItem.SelectValue,
                                                currentlyChosenDisplayValue: listItem.DisplayValue ,
                                                dropdownVisible: false 
                                            });
                                        }
                                        this.sendDataToParent(listItem, listItemIndex);
                                    }
                                    }
                                        className='dropdown-list-item'>{listItem.DisplayValue}
                                    </div>
                                </>
                            );
                        })
                    }

                </div>
            </div>

        </>);
    };
}