import Y from '../../assets/img/Y.png';
import P from '../../assets/img/P.png';
import R from '../../assets/img/R.png';
import T from '../../assets/img/T.png';
import Styles from './About.module.css';

const About = () => {
    return (        
        <div id="about" className={Styles.About}>
            <div className={Styles.Container}>
                <div className={Styles.Box}>
                    <div>
                        <p><img src={Y} className={Styles.Who} alt="Y" /></p>
                        <p>screaming | production</p>
                        <p>putrefaction | crowd defunding</p>
                    </div>
                </div>
                <div className={Styles.Box}>
                    <div>
                        <p><img src={P} className={Styles.Who} alt="P" /></p>
                        <p>drums | engineering</p>
                        <p>creative vulgarity | cruel & unusual punishments</p>
                    </div>
                </div>
            </div>
            <div className={Styles.Container}>
                <div className={Styles.Box}>
                    <div>
                        <p><img src={R} className={Styles.Who} alt="R" /></p>
                        <p>bass | songwriting</p>
                        <p>degeneracy | degentrification</p>
                    </div>
                </div>
                <div className={Styles.Box}>
                    <div>
                        <p><img src={T} className={Styles.Who} alt="T" /></p>
                        <p>guitar | arrangment & composition</p>
                        <p>dodgy wiring | armchair psychoses</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
