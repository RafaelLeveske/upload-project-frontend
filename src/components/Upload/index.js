import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag Your Archives Here</UploadMessage> 
    }
    if (isDragReject) {
      return <UploadMessage type="error">Not Supported Archive</UploadMessage>
    }
    return <UploadMessage type="success">Drop Your Archives Here</UploadMessage>
  }
  render() {

    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload} >
        {  ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer  
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          >
            <input {...getInputProps()} />

            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        ) }
      </Dropzone>
    );
  }
}