import { Button } from 'react-bootstrap';
import { useUpdateUserMutation } from '../../redux/rtk-api';



function CloudinaryWidget() {

    const [updateUser] = useUpdateUserMutation()
    
    const handleUpload = (uploadResult) => {
        if (uploadResult.event === "success") {
            updateUser({img: uploadResult.info.secure_url})
        }
        
    }

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "dkfqpw0yr",
        uploadPreset: "qvpzupgv",
        sources: [
            "local",
            "url",
            "dropbox",
            "camera",
            "image_search",
            "google_drive"
        ],
        googleApiKey: "AIzaSyByYRFt7mpDMCRne9cLK6oytCe_adXf5nU",
        showAdvancedOptions: true,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
             palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#0078FF",
                menuIcons: "#5A616A",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#0078FF",
                action: "#FF620C",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#E4EBF1"
             },
             fonts: {
                default: null,
                "'Fira Sans', sans-serif": {
                    url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                    active: true
                }
             }
        }
    },  
    (err, info) => {
        if (!err) {    
            handleUpload(info)
        }
    });

    const showWidget = (widget) => {
        widget.open()
    }

    return (
        <Button onClick={() => showWidget(widget)}>Upload Picture</Button>
    )
}

export default CloudinaryWidget