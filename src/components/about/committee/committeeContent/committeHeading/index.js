import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from '../../Committee.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';
import Arrows from '../../../../ui/arrows';

const CommitteeHeading = () => {

    const [isSHowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isSHowMore);
    };

    return <>
        { size.width > 768 ?
            <div className={ styles.committee__descrs }>
                <h2 className={ styles.committee_heading }>Committee</h2>
                <div className={ `${ styles.committee__descr } ${ styles.mission_texts }` }>
                    <p>
                        The Committee of management meets at
                        least once per term and oversees the operation of the school.
                    </p>
                    <p>
                        Working in an advisory capacity, the committee members draw on their professional
                        skills and experiences to steer the school in its delivery of an effective program.
                    </p>
                </div>
                <div className={ styles.committee__table }>
                    <h4>Advisory Committee</h4>
                    <div className={ styles.committee__table_wrap }>
                        <div className={ styles.committee__table_wrap_item }>
                            <div>
                                <p>Alfonso Scibilia</p>
                                <p>John Bibby</p>
                                <p>Deneille Sutton</p>
                                <p>Natalia Zarzycka</p>
                            </div>
                            <div>
                                <p>President</p>
                                <p>Vice President</p>
                                <p>Treasurer</p>
                                <p>Secretary</p>
                            </div>
                        </div>
                        <div className={ styles.committee__table_wrap_item }>
                            <div>
                                <p>Rochelle Holstein</p>
                                <p>Susannah Ahern</p>
                                <p>Barbara Blakey</p>
                            </div>
                            <div>
                                <p>Parent Rep</p>
                                <p>General Member</p>
                                <p>General Member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className={ styles.committee__descrs }>
                <div className={ `${ styles.committee__descr } ${ styles.mission_texts }` }>
                    <p>
                        The Committee of management meets at
                        least once per term and oversees the operation of the school.
                    </p>
                    <p>
                        Working in an advisory capacity, the committee members draw on their professional
                        skills and experiences to steer the school in its delivery of an effective program.
                    </p>
                </div>
                <div className={ styles.committee__table } style={!isSHowMore ? {} : {display: 'block'}}>
                    <h4>Advisory Committee</h4>
                    <div className={ styles.committee__table_wrap }>
                        <div className={ styles.committee__table_wrap_item }>
                            <div>
                                <p>Alfonso Scibilia</p>
                                <p>John Bibby</p>
                                <p>Deneille Sutton</p>
                                <p>Natalia Zarzycka</p>
                            </div>
                            <div>
                                <p>President</p>
                                <p>Vice President</p>
                                <p>Treasurer</p>
                                <p>Secretary</p>
                            </div>
                        </div>
                        <div className={ styles.committee__table_wrap_item }>
                            <div>
                                <p>Rochelle Holstein</p>
                                <p>Susannah Ahern</p>
                                <p>Barbara Blakey</p>
                            </div>
                            <div>
                                <p>Parent Rep</p>
                                <p>General Member</p>
                                <p>General Member</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Arrows
                    img={ArrowT}
                    text={!isSHowMore ? "MORE" : "LESS"}
                    style={!isSHowMore ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                    showMore={handleShowMore}
                />
            </div> }</>;
};

export default CommitteeHeading;