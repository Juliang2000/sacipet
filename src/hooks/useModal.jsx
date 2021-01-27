import React from 'react';

const useModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClickClose = () => {
      setOpen(false);
    };

    return {
        open,
        handleClickOpen,
        handleClickClose
    }
}

export default useModal;



