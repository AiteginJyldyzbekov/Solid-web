import css from "./preloader.module.css";

const Preloader = ({ full }) => {
    return (
        <div className={full ? css.wrapper : css.pad}>
            <div className={css.container}>
                <svg className={css.loader} viewBox="0 0 340 340">
                    <circle className={css.circle} cx="170" cy="170" r="160" stroke="#ff346d" />
                    <circle className={css.circle} cx="170" cy="170" r="135" stroke="#363A40" />
                    <circle className={css.circle} cx="170" cy="170" r="110" stroke="#ff346d" />
                    <circle className={css.circle} cx="170" cy="170" r="85" stroke="#363A40" />
                    {/*<circle cx="170" cy="170" r="60" stroke="#00bdd0"/>*/}
                </svg>
                <img src="/images/solid-logo.png" className={css.img} alt="solid" />
            </div>
        </div>
    );
};

export default Preloader;
