import React, { useState } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';

// styles
import styles from './PrivacyPolicy.module.scss';

// components
import Arrows from '../arrows';

const PrivacyPolicy = () => {

    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.privacy } >
        <div className={ styles.privacy_showed }>
            <div className={ styles.privacy__item }>
                <h2>1. Scope</h2>
                <p>
                    This policy applies to members of school staff and
                    the school council at Kamaruka. This policy will be made available on request.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>2. Authorisation</h2>
                <p>
                    This policy was adopted at Kamaruka the School Council meeting on 30/08/2011.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>3. Review Date</h2>
                <p>
                    This policy shall be reviewed bi-annually in the month of June
                    prior to the end of the financial year and updated if required.
                </p>
            </div>
        </div>
        <div className={ `${ styles.privacy_hidden } ${ isShowMore ? styles.privacy_visible : '' }` }>
            <div className={ styles.privacy__item }>
                <h2>4. Background</h2>
                <p>
                    All staff of Kamaruka are required by law to protect the personal
                    and health information the School collects and holds.
                </p>
                <p>
                    The Victorian privacy laws, the Information Privacy Act 2000 and
                    Health Records Act 2001, provide for the protection of personal and health information.
                </p>
                <p>
                    The privacy laws do not replace any existing obligations
                    Kamaruka has under other laws. Essentially this policy will
                    apply when other laws do not regulate the use of personal information.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>5. Definitions</h2>
                <p>
                    Personal information means information or opinion that is recorded in any form
                    and whether true or not, about an individual whose identity is apparent,
                    or can be reasonably be determined from the information or opinion.
                    For example this includes all paper and electronic records, photographs and video recordings.
                </p>
                <p>
                    Health information is defined as including information or opinion about
                    a person’s physical, mental or psychological health, or disability,
                    which is also classified as personal information. This includes information
                    or opinion about a person’s health status and medical history, whether recorded or not.
                </p>
                <p>
                    Sensitive information is defined as information relating to a
                    person’s racial or ethnic origin, political opinions, religion,
                    trade union, or other professional, or trade association membership,
                    sexual preferences, or criminal record that is also classified as
                    personal information about an individual.
                </p>
                <p>
                    In this policy personal information refers to personal information,
                    health information and sensitive information unless otherwise specified.
                </p>
                <p>
                    Parent in this policy in relation to a child, includes step parent,
                    an adoptive parent, a foster parent, guardian,
                    or a person who has custody or daily care and control of the child.
                </p>
                <p>
                    Staff in this policy is defined as someone who carries out a duty on behalf of the School,
                    paid or unpaid, or who is contracted to, or directly employed by the School or the Department
                    of Education and Training (DE&T). Information provided to a School through job applications
                    is also considered staff information.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>6. Policy Context</h2>
                <ul className={styles.privacy__list}>
                    <li>
                        Personal Information is collected and used by Kamaruka to:
                        <ul className={styles.privacy__sublist}>
                            <li>
                                - provide services or to carry out the School statutory functions,
                            </li>
                            <li>
                                - assist the School services
                                and its staff to fulfil its duty of care to students,
                            </li>
                            <li>
                                - plan, resource, monitor and evaluate School services and functions,
                            </li>
                            <li>
                                - comply with DE&T reporting requirements,
                            </li>
                            <li>
                                - investigate incidents or defend any legal claims against the
                                School, its services or its staff, and
                            </li>
                            <li>
                                - comply with laws that impose specific
                                obligations regarding the handling of personal information.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={ styles.privacy__item }>
                <h2>7. Collection of Personal Information</h2>
                <p>
                    The School collects and holds personal information about students, parents and staff.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>8. Use and disclosure of the personal information provided</h2>
                <p className={styles.privacy__subtext}>
                    Students and Parents: <br/>
                    8.1 The purposes for which the School uses personal information of students and parents include:
                </p>
                <ul className={styles.privacy__sublist}>
                    <li>- keeping parents informed about matters related to their child’s schooling,</li>
                    <li>- looking after students’ educational, social and health needs,</li>
                    <li>- celebrating the efforts and achievements of students,</li>
                    <li>- day-to-day administration,</li>
                    <li>- satisfying the School’s legal obligations, and</li>
                    <li>- allowing the School to discharge its duty of care.</li>
                </ul>
                <p className={styles.privacy__subtext}>
                    Staff: <br/>
                    8.2 The purposes for which the School uses personal information of job applicants, staff members
                    and contractors include:
                </p>
                <ul className={styles.privacy__sublist}>
                    <li>- assessing the suitability for employment,</li>
                    <li>- administering the individual’s employment or contract,</li>
                    <li>- for insurance purposes, such as public liability or WorkCover,</li>
                    <li>- satisfying the School’s legal requirements, and</li>
                    <li>- investigating incidents or defending legal claims about the School, its services or staff.</li>
                </ul>
                <p className={styles.privacy__subtext}>
                    8.3 The School will use and disclose personal information about a student, parent and staff when:
                </p>
                <ul className={styles.privacy__sublist}>
                    <li>- it is required for general administration duties and statutory functions,</li>
                    <li>- it relates to the purposes for which it was collected, and</li>
                    <li>
                        - for a purpose that is directly related to the
                        reason the information was collected and the use would be
                    </li>
                    <li>
                        - reasonably expected by the individual and there is no
                        reason to believe they would object to the 	  disclosure.
                    </li>
                </ul>
                <p className={styles.privacy__subtext}>
                    8.4 The School can disclose personal information for another purpose when:
                </p>
                <ul className={styles.privacy__sublist}>
                    <li>- the person consents, or</li>
                    <li>
                        - it is necessary to lessen or prevent a serious or
                        imminent threat to life, health or safety or
                    </li>
                    <li>- is required by law or for law enforcement purposes.</li>
                </ul>
            </div>
            <div className={ styles.privacy__item }>
                <h2 style={{fontWeight: '500'}}>
                    9. Where consent for the use and disclosure of personal information is required,
                    the school will seek consent from the appropriate person. In the case of a student’s
                    personal information, the school will seek the consent from the student and/ or parent
                    depending on the circumstances and the student’s mental ability and maturity to
                    understand the consequences of the proposed use and disclosure.
                </h2>
                <p className={styles.privacy__subtext}>
                    9.1 (This paragraph is relevant for Primary Schools only) <br/>
                    Kamaruka will generally seek the consent of the student’s parents and will
                    treat consent given by the 	parent as consent given on behalf of the student.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>10. Accessing personal information</h2>
                <p>
                    A parent, student or staff member may seek access to their personal information,
                    provided by them, that is held by the School.
                </p>
                <p>
                    Access to other information maybe restricted according to the requirements
                    of laws that cover the management of school records. These include the Public
                    Records Act and the Freedom of Information Act.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>11. Updating personal information</h2>
                <p>
                    The School aims to keep personal information it holds accurate,
                    complete and up-to-date. A person may update their personal
                    information by contacting the Principal.
                </p>
            </div>
            <div className={ styles.privacy__item }>
                <h2>12. Security</h2>
                <p className={styles.privacy__subtext}>
                    12.1 School staff and students have use of information communication technologies
                    (ICT) provided by the School. This use is directed by:
                </p>
                <ul className={styles.privacy__sublist}>
                    <li>- DE&T’s Acceptable Use policy for Internet, email, and other electronic communications.</li>
                    <li>- DE&T’sIT Security Policy</li>
                </ul>
                <p className={styles.privacy__subtext}>
                    12.2 Web Sites Information Collected: <br/>
                    Kamaruka web and web server makes a record of the
                    following data once connected to www.kamaruka.vic.edu.au:
                </p>
                <ul className={styles.privacy__sublist}>
                    <li>- visit and logs the following information for statistical purposes:</li>
                    <li>- the Internet Protocol (IP) address of the machine from connecting to the website</li>
                    <li>- the top level domain name (for example .com, .gov, .au, .uk etc)</li>
                </ul>
            </div>
            <div className={ styles.privacy__item }>
                <h2>13. Complaints under Privacy</h2>
                <p>
                    Should the school receive a complaint about personal information privacy this
                    will be investigated in accordance with DE&T’s Privacy Complaints Handling Policy.
                </p>
                <p>
                    This privacy policy was created using “Website Tool Kit – Resources: Suggestions for
                    Developing a School Privacy Policy” issued by The Department of Education and Early
                    Childhood Development (https://www.eduweb.vic.gov.au).
                </p>
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

export default PrivacyPolicy;