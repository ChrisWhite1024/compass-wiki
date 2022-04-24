import styles from './passage.css';
import Get_Start from '../assets/get_start'

function Passage(props) {
    console.log(props.match.params.type)
    return (
        <div className={styles.bg}>
            <div className={styles.boxNormal}>
                {props.match.params.type == 'get_start' && <Get_Start/>}
            </div>
        </div>
    )
}

export default Passage;