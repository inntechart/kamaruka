import React, { useState } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';

// styles
import styles from './TermsCondidtions.module.scss';

// components
import Arrows from '../arrows';

const TermsCondidtions = () => {

    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.terms } >
        <div className={ styles.terms_showed }>
            <div className={ styles.terms__item }>
                <p>
                    1. Welcome to the website of Kamaruka Education Centre (“Kamaruka”).
                </p>
            </div>
            <div className={ styles.terms__item }>
                <p>
                    2. By accessing, browsing or using this Site, you agree to be bound by these terms,
                    conditions and disclaimers as amended from time to time (“Terms of Use”).
                    Please read these Terms of Use carefully before using this Site.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <p>
                    3. These Terms of Use are in addition to any other terms and conditions
                    that apply to the sale of goods or services by Kamaruka. If you do not
                    agree to be bound by these Terms of Use, please immediately
                    discontinue your use of the Site.
                </p>
            </div>
        </div>
        <div className={ `${ styles.terms_hidden } ${ isShowMore ? styles.terms_visible : '' }` }>
            <div className={ styles.terms__item }>
                <p>
                    4. Kamaruka may amend these Terms of Use from time to time without notice.
                    Any amendment will be effective immediately upon being posted on this Site.
                    Your continued use of this Site after any amendment becomes effective will
                    constitute your agreement to be bound by these Terms of Use, as amended.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>PRIVACY</h2>
                <p>
                    5. Kamaruka may collect, use, store, record and transmit your personal
                    information entered on this Site. For further details, please
                    refer to Kamaruka’ Privacy Policy. Your continued use of the
                    Site and the provision of your personal information constitutes
                    your approval for Kamaruka to deal with your personal information.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>PRODUCT PRICING AND DESCRIPTION</h2>
                <p>
                    6. The prices displayed for products on the Site is the recommended
                    retail price for the product. As a recommended retail price,
                    the price displayed may not represent the actual price
                    payable for the product in any area on a given day.
                </p>
                <p>
                    7. All product descriptions are of a general nature only and the product may
                    differ from any description given on the Site.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>DISCLAIMER</h2>
                <p>
                    8. Kamaruka does not warrant, guarantee or make any representation
                    regarding the accuracy, adequacy, reliability, completeness
                    or timeliness of the information available on this Site
                    (“Information”) or that it is suitable for your intended use.
                    The Information is provided by Kamaruka in good
                    faith on an “as is” basis without warranty of any kind.
                </p>
                <p>
                    9. The Information provided is of a general nature only and
                    should not be used as the basis for making any decision,
                    without consulting primary, more accurate, more complete or more timely sources of information.
                </p>
                <p>
                    10. The Site may contain historical information that is not
                    current and is provided for reference purposes only.
                </p>
                <p>
                    11. The Information does not constitute financial or professional advice.
                </p>
                <p>
                    12. Kamaruka does not warrant or represent that
                    the Information is free from human or mechanical error,
                    technical inaccuracies or other typographical errors or defects.
                    The use of this Site and the Information is at your own risk.
                </p>
                <p>
                    13. Kamaruka reserves the right to vary or modify the information
                    contained on this Site, to change or discontinue any feature or part of
                    this Site, to change the hours of availability and the equipment required
                    to obtain access to this Site, without notice and without liability.
                </p>
                <p>
                    14. Kamaruka makes no warranties, guarantees or representations
                    that the material in this Site will not cause damage or that the material
                    is free from any computer virus or other defects. It is your responsibility
                    to complete a virus check on any Information downloaded.
                </p>
                <p>
                    15. All warranties, representations and implied terms and any liability which may
                    arise in relation to your access to or use of this Site or the Information is expressly
                    excluded to the maximum extent permitted by law.
                </p>
                <p>
                    16. Kamaruka reserves the right to suspend or terminate your access to the
                    site at its sole discretion for any reason.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>LIMITATION OF LIABILITY</h2>
                <p>
                    17. Kamaruka will in no way be liable to any party for any injury,
                    loss or damage arising out of or related to the use (or the inability to use)
                    the Information on this Site. Under no circumstances will Kamaruka be liable for any
                    direct, indirect, incidental, special or consequential loss or
                    damage, including loss of programs or data, loss of business, business
                    interruption, or lost profits. If your use of this Site results in the
                    need for servicing or replacing of equipment, Kamaruka will not be liable for those costs.
                </p>
                <p>
                    18. Where liability cannot be excluded, any liability incurred by Kamaruka
                    is limited to the re-supply of the Information on the Site or the reasonable
                    costs of having the Information re-supplied.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>LINKS TO OTHER SITES</h2>
                <p>
                    19. You may from time to time be able, through hypertext or other computer
                    links, to gain access to other Sites operated either by Kamaruka,
                    its affiliates (“Linked Sites”) or other third parties (“Third Party Linked Sites”).
                </p>
                <p>
                    20. The Linked Sites may have different terms of use and privacy requirements.
                </p>
                <p>
                    21. Unless otherwise specified, the Third Party Linked Sites are not under Kamaruka’
                    control. The Third Party Linked Sites may have different terms of use and privacy requirements.
                    Unless otherwise specified, Kamaruka is not responsible for the content of any
                    Third Party Linked Sites, or any changes or updates to such sites. Kamaruka provides
                    these links for your convenience only. You link to any such Third Party Linked Sites
                    at your own risk. Kamaruka is not a party to any transaction between you and a
                    Third Party Linked Site. Unless specified, Kamaruka does not sponsor, endorse, adopt,
                    confirm, guarantee or approve of any material or representations made in
                    those Third Party Linked Sites.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>INTELLECTUAL PROPERTY</h2>
                <p>
                    22. The copyright in the content of this Site is owned by Kamaruka
                    and/or its affiliates. © Kamaruka. All rights reserved.
                </p>
                <p>
                    23. You acknowledge and agree that all content, coding, graphics and
                    Information available on this Site is protected by copyright,
                    trade mark or other intellectual property rights and laws.
                </p>
                <p>
                    25. No part of the Information may be copied, reproduced, modified, republished,
                    uploaded, posted, transmitted or distributed in any form or manner without Kamaruka’
                    prior written consent. However, you may download and print these Terms of Use and the
                    Privacy Policy for your personal non-commercial use.
                </p>
                <p>
                    26. You expressly acknowledge that your use of the Site does not
                    result in you gaining any right, title or interest to the
                    Information or any other aspect of the Site.
                </p>
                <p>
                    27. Commercial use of the Site and the Information is expressly prohibited.
                </p>
                <p>
                    28. All trademarks and trade names which appear on this Site are
                    proprietary to Kamaruka and/or its affiliates. Use of these trademarks
                    without the owner’s consent will infringe the owner’s intellectual property rights.
                    Nothing in this Site should be interpreted as granting any rights to use or
                    distribute any names, logos or trademarks except with the
                    express written consent of the respective owner.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>SPAM</h2>
                <p>
                    29. The publication of Kamaruka’ email addresses on this
                    Site is to facilitate communications relating
                    to the goods and services supplied by Kamaruka.
                </p>
                <p>
                    30. It must not be inferred as consent by
                    Kamaruka to receive unsolicited commercial electronic messages.
                </p>
            </div>
            <div className={ styles.terms__item }>
                <h2>MISCELLANEOUS</h2>
                <p>
                    31. By accessing and using this Site, you agree to submit to the exclusive
                    jurisdiction of the Courts of Victoria. If you access this Site from
                    other jurisdictions, you are additionally responsible for compliance with local laws.
                </p>
                <p>
                    32. If a provision (or part of it) is held to be unenforceable or invalid,
                    then it must be interpreted as narrowly as necessary to allow it to be enforceable or valid.
                </p>
                <p>
                    33. If a provision (or part of it) cannot be read down, then the
                    provision (or part of it) must be severed from this
                    Agreement and the remaining provisions
                    (and remaining part of the provision) are valid and enforceable.
                </p>
                <p>
                    34. A party may exercise its rights at any time and does not waive those
                    even if that party previously waived a breach or default of all or
                    part of the same or other provision or delayed or omitted to exercise its rights.
                </p>
                <p>
                    35. A waiver is only effective if it is signed by the party
                    granting the waiver and only to the extent set out in the waiver.
                </p>
                <p>March 2020</p>
            </div>
        </div>
        <Arrows
            img={ ArrowT }
            style={ isShowMore ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' } }
            text={ isShowMore ? 'LESS' : 'MORE' }
            showMore={ handleShowMore }
        />
    </div>;
};

export default TermsCondidtions;