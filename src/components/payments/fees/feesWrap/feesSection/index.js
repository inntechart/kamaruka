import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './FeesSection.module.scss';


// components
import Arrows from '../../../../ui/arrows';
import Table from '../../../../ui/payment/table';
import PaymentsMethods from '../../../../ui/payment/paymentsMethods';
import ThankYou from '../../../thankYou';

const FeesSection = () => {

    const { id } = useParams();
    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        { !id ? <>
            <p>
                The school fees include registration and grading fees for the Martial Arts,
                as well as the cost of the three camps. The school supplies stationery,
                exercise books and other reading materials. Boys will be expected to
                join their local libraries to extend their access to novels and research materials.
            </p>

            <div
                className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
            >
                <p>
                    Kamaruka is a non-profit independent school. Fees are reviewed annually by the Committee of
                    Management.
                </p>
                <p>
                    Low-income parents may qualify for funding to reduce fees below 50%.
                </p>
                <p>
                    <span>Fee Schedule</span><br />
                    The fees for 2020 are $11,000 AUD for the year and are payable by the following
                    set dates as a single payment, biannual or quarterly:
                </p>
                <Table
                    style={ { borderColor: '#125E00' } }
                    fRowStyles={ { borderColor: '#125E00', backgroundColor: '#B8E986' } }
                    sRowStyles={ { borderColor: '#125E00', backgroundColor: '#D2FBA8' } }
                    headerStyles={ { borderColor: '#125E00' } }
                    titleStyle={ { backgroundColor: '#5AA108', color: '#fff' } }
                    headingTitle="Payment"
                    title="Annual Fee*"
                    fItem1="Friday 27th March"
                    sItem1="$11,000 AUD"
                />
                <Table
                    style={ { borderColor: '#00499E' } }
                    fRowStyles={ { borderColor: '#00499E', backgroundColor: '#5B9FF1' } }
                    sRowStyles={ { borderColor: '#00499E', backgroundColor: '#A5CEFF' } }
                    headerStyles={ { borderColor: '#00499E' } }
                    titleStyle={ { backgroundColor: '#206FCB', color: '#fff' } }
                    headingTitle="1st Payment"
                    headingTitle3="2nd Payment"
                    title="Biannual Fees*"
                    fItem1="Friday 27th March"
                    sItem1="$5,500 AUD"
                    fItem3="Friday 17th July"
                    sItem3="$5,500 AUD"
                />
                <Table
                    style={ { borderColor: '#A85313' } }
                    fRowStyles={ { borderColor: '#A85313', backgroundColor: '#F98831' } }
                    sRowStyles={ { borderColor: '#A85313', backgroundColor: '#FFA865' } }
                    headerStyles={ { borderColor: '#A85313' } }
                    titleStyle={ { backgroundColor: '#D65C00', color: '#fff' } }
                    headingTitle="1st Payment"
                    headingTitle2="2nd Payment"
                    headingTitle3="3nd Payment"
                    headingTitle4="4nd Payment"
                    title="Quarterly Fees*"
                    fItem1="Friday 27th March"
                    sItem1="$2,750 AUD"
                    fItem2="Friday 3rd April"
                    sItem2="$2,750 AUD"
                    fItem3="Friday 17th July"
                    sItem3="$2,750 AUD"
                    fItem4="Friday 9th October"
                    sItem4="$2,750 AUD"
                />
                <p className={ styles.content__tax }>*Goods & Services Tax (GST) is not applicable on fees.</p>
            </div>
            <Arrows
                img={ ArrowT }
                showMore={ handleShowMore }
                text={ isShowMore ? 'LESS' : 'MORE' }
                style={ isShowMore ? {} : { transform: 'rotate(180deg)' } }
                compStyle={ { position: 'static', marginBottom: '30px', marginTop: '30px' } }
            />
            <p>There are three ways you can make a donation:</p>
            <PaymentsMethods /></> :
            <ThankYou
                title="Thankyou for your school fee payment"
                text1="Kamaruka Education Centre appreciates your prompt payment."
                text2="A receipt of this school fee paymentwill be sent to your email shortly."
                payVia="Pay via"
                direct="Direct Deposit"
            /> }
    </div>;
};

export default FeesSection;