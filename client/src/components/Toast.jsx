import { toast } from 'react-toastify';

export const productAddedToast = (message, time = 800) => {
    toast.success(message, {
        position: 'top-right',
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
})}