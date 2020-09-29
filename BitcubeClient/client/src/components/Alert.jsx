import React from 'react';
import {
    Alert,
    AlertIcon,
  } from "@chakra-ui/core";

const AlertModal = (props) => {

    const { description, variant, status } = props;
    return (
        <Alert status={status} variant={variant}>
            <AlertIcon />
            {description}
        </Alert>
    )
}

export default AlertModal;
