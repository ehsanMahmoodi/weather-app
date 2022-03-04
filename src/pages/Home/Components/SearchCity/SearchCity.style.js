import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    searchCityForm: {
        height:'2.5rem'
    },
    formItems: {
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#3a3a3a',
        borderRadius:'0.62rem',
        "& input":{
            backgroundColor:'transparent',
            border:'none',
            outline:'none',
            width:'100%',
            height:'100%',
            padding:'0 1rem',
            color:'#fff',
            fontSize:'0.87rem'
        },
        "& button":{
            backgroundColor:'transparent',
            border:'none',
            height:'100%',
            padding:'0 1rem',
            cursor:'pointer',
            color:'#fff',
            fontSize:'0.93rem'
        }
    }
})