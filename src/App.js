import React from 'react';

import Header from './components/Header';
import Popup from './components/Popup';
import Options from './components/Options';
import Action from './components/Action';
import AddOption from './components/AddOption';

import * as styles from './styles.scss';

class ChooseAScrumMasterApp extends React.Component {
  constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleRemoveOption = this.handleRemoveOption.bind(this);
      this.handleSetOption = this.handleSetOption.bind(this);
      this.handleHideElements = this.handleHideElements.bind(this);
      this.handleTogglePopup = this.handleTogglePopup.bind(this);
      this.handlePopupText = this.handlePopupText.bind(this);
      this.state = {
          subtitle: props.subtitle,
          options: props.options,
          option: '',
          hideElements: false,
          showPopup: props.showPopup,
          PopupText: props.PopupText,
          error: undefined
      }
  }

  handleAddOption(option) {
    if (!option) {
        return this.setState(() => {
            return {
                error: 'please enter a valid name'
            }
        });
      } 
      
      if (this.state.options.indexOf(option) > -1) {
          return this.setState(() => {
              return {
                  error: 'this option already exists'
              }
          });
      } 
      
      this.setState((prevState) => {
          return {
              options: [...prevState.options, option]
          };
      });
  }

  handleHideElements() {
    this.setState(() => {
        return {
            hideElements: !this.state.showPopup
        }
    })
  }

  handleTogglePopup() {
    if (this.state.showPopup) {
        this.setState(() => {
            return {
                PopupText: 'Your new Scrummaster will be...',
            }
        });
    }

    this.setState({
        showPopup: !this.state.showPopup
    });

    this.handleHideElements();
  }

  handlePopupText() {
    this.setState(() => {
        return {
            PopupText: `${this.state.option}`
        }
    });
  }

  handleSetOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() =>{
        return {
            option: option
        }
    });
  }

  handlePick() {
    this.handleSetOption();
    this.handleHideElements();
    this.handleTogglePopup();
    setTimeout(() => { this.handlePopupText() }, 2500);
  }

  handleDeleteOptions() {
      this.setState(() =>{
          return {
              options: []
          }
      })
  }

  handleRemoveOption(option) {
    this.setState(prevState => {
      return {
          options: [...prevState.options.filter(opt => opt !== option)]
      };
    });
  }

  render () {
      return (
          <div>
              <Header
                subtitle={this.state.subtitle}
                hideElements={this.state.hideElements}
                />
                {this.state.showPopup && (
                    <Popup
                        text={this.state.PopupText}
                        closePopup={this.handleTogglePopup}
                    />)
                }
              <Action 
                hasOptions={!!this.state.options.length}
                hideElements={this.state.hideElements}
                handlePick={this.handlePick}
              />
              <Options 
                  options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleRemoveOption={this.handleRemoveOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
                error={this.state.error}
              />
          </div>
      )
  }
}

ChooseAScrumMasterApp.defaultProps = {
    subtitle: 'Bribes are welcome...',
    options: ['John', 'Imran', 'Chris', 'Rod', 'Mike', 'Rekha', 'Karl', 'Sharon', 'Kieran', 'Pasha', 'Andrei', 'Fedor'],
    showPopup: false,
    PopupText: 'Your new Scrummaster will be...'
}

export default ChooseAScrumMasterApp;
