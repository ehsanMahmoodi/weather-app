import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    weatherShow:{
        backgroundColor: "#212121",
        color: "rgba(0, 0, 0, 0.87)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "0.25rem",
        boxShadow:
            "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px !important",
        backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        overflow: "hidden",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    weatherItem:{
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        margin:'0.25rem 0',
        "& div":{
          height:"1.37rem"
        },
        "& > p":{
            color:"#fff",
            textTransform: "capitalize"
        }
    }

})