import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './DonatSection.module.scss';

// hooks


// components
import Arrows from '../../../../ui/arrows';
import DonatsMethods from '../../../../ui/payment/donatMethods';
import ThankYou from '../../../thankYou';

const DonatSection = () => {

    const { id } = useParams();
    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        { !id ? <>
                <p>
                    When you give money to a charity such as Kamaruka Education Centre (Kamaruka Inc.),
                    your gift can be a tax-deductible donation which is a great way to give your tax
                    refund a boost while contributing to a worthy cause.
                </p>

                <div
                    className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
                >
                    <p>
                        Kamaruka Education Centre benefits immensely on the generosity of people’s donations
                        to support them, so we can work toward important goals such as expanding to help more boys
                        with ADHD succeed in life acaedemically, emotionally and socially.
                        Kamaruka Education Centre is Australia’s only specialised provider of education
                        specifically for boys with ADHD, provideing them with the means to succeed, which
                        is unmatched by government and private mainstream schools.
                    </p>
                    <ul>
                        <li>Donations to Kamaruka Education Centre will:</li>
                        <li>- Contribute towards savings to buy our own premises</li>
                        <li>- Support our literacy intervention program</li>
                        <li>- Support the research and development of other specialised programs</li>
                    </ul>
                    <p>
                        Every time you make a donation more than $2 to a registered charity, don’t
                        forget that your charitable donation is probably tax deductible.
                    </p>
                    <p>
                        Here’s what you need to know to correctly claim tax deductible donations on your tax return.
                    </p>
                    <p>
                        <strong>Charitable donations and tax deductions</strong><br />
                        Kamaruka Education Centre is registered by the ATO as a “Deductible Gift Recipient
                        organisation”, so donations you make are tax deductible.
                    </p>
                    <p>
                        You can find out if a charity is a deductible gift recipient organisation by searching
                        (“Kamruka Inc.”) on the Australian Business
                        Register at <a href="https://abr.business.gov.au/">https://abr.business.gov.au/</a>
                    </p>
                    <p>
                        Alternatively you can click this
                        link: <a
                        href="https://abr.business.gov.au/ABN/View/82267854859">https://abr.business.gov.au/ABN/View/82267854859</a>
                    </p>
                    <p>
                        Deductible gift recipient charities usually tell you on their website if donations are
                        tax deductible. If you’re still not sure, ring the charity and ask for
                        proof of their deductible gift recipient status.
                    </p>
                    <p>
                        <strong>When is a donation not a tax deduction?</strong><br />
                        First of all, if you receive a raffle ticket, dinner attendance,
                        event entry, chocolates, or anything like that, then your
                        donation can’t be claimed as a deduction.
                    </p>
                    <p>
                        Basically, if you receive something because of your donation, then don’t
                        claim the donation as a tax deduction. This is because the ATO sees this
                        as a transaction where you receive a good/service in return for the money you donate.
                    </p>
                    <p>
                        Next, if the donation was to an organisation that is not a registered deductible
                        gift recipient, then you can’t claim it, ever.
                    </p>
                    <p>
                        <strong>How do I claim donations as tax deductions?</strong>
                        As long as your donation is $2 or more, and you make it to a deductible gift
                        recipient charity, you can claim the full amount of money that you donated on
                        your tax return. Section D9 on your tax return (Gifts and Donations) deals
                        specifically with charitable donations, so that’s where you should record your donations.
                    </p>
                    <p>
                        Remember to keep proof (in the form of a receipt or bank statement) of
                        any donation you make as well as the total dollar amount of all donations you make in a tax year.
                    </p>
                    <p>
                        Why not consider boosting your tax refund and contribute to Kamaruka Education Centre’s worthy
                        cause?
                    </p>
                </div>
                <Arrows
                    img={ ArrowT }
                    showMore={ handleShowMore }
                    text={ isShowMore ? 'LESS' : 'MORE' }
                    style={ isShowMore ? {} : { transform: 'rotate(180deg)' } }
                    compStyle={ { position: 'static', marginBottom: '30px', marginTop: '30px' } }
                />
                <p>There are three ways you can make a donation:</p>
                <DonatsMethods />
            </> :
            <ThankYou
                title="Thankyou for your Donation"
                text1="Kamaruka Education Centre appreciates your donation and generosity."
                text2="A receipt of this donation will be sent to your email shortly."
                payVia="Donate via"
                direct="Direct Deposit"
            /> }
    </div>;
};

export default DonatSection;