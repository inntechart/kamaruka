import React, { useState } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';
import St1 from '../../../assets/img/staff/1.png';
import St2 from '../../../assets/img/staff/2.png';
import St3 from '../../../assets/img/staff/3.png';
import St4 from '../../../assets/img/staff/4.png';
import St5 from '../../../assets/img/staff/5.png';
import St6 from '../../../assets/img/staff/6.png';
import St7 from '../../../assets/img/staff/7.png';
import St8 from '../../../assets/img/staff/8.png';
import St9 from '../../../assets/img/staff/9.png';
import St10 from '../../../assets/img/staff/10.png';

// styles
import styles from './Staff.module.scss';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';

// components
import StaffMember from './staffMember';
import Arrows from '../arrows';

const staffMembersL1 = [
    {
        name: 'Alfonso Scibilia',
        major: 'Founder & Principal',
        founded: 'Founded 2001',
        img: St1,
        texts: [
            `
            Alfonso began teaching Mathematics, Science and Physical Education at 
            St Joseph’s Marist Brothers College North Firzroy from 1975 to 1986. He then 
            went  to teach Mathematics and Science at St Monica’s College Epping from 1987 to 
            1989; where he was also the Year 8 Co-ordinator.
            `,
            `
            From 1990 to 1993, Alfonso was a Stunt Actor whilst also taking on the roles of  
            Mathematics and Science replacement teacher at both Santa Maria College Northcote (1991) 
            and St Mary’s Boys School West Melbourne (1991-1992).
            `,
            `
            From 1993 to 1994, Alfonso taught Mathematics and Science at Hawthorn Secondary College. 
            Alfonso then went on as Mathematics teacher & Martial Arts Instructor at Frank Dando’s Sports 
            Academy from 1995 to 2000.
            `,
            `
            Alfonso’s hobbies include several forms of Martial Arts including Shotokan Karate,
            Aikido, Kendo, and Foot & Fist Boxing – which he is the  co-founder and head instructor of 
            the Australian Foot & Fist Boxing Association
            `,
            `
            He also enjoys Gardening, Hiking, Camping, Swimming, Movies, 
            Theatre and spending time with his pet dogs Buzz & Lola.
            `,
        ],
        position: {
            title: 'Position',
            list: ['Founder', 'Principal']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Secondary Mathematics', 'Science', 'Social Skills', 'Martial Arts']
        },
        training: {
            title: 'Training & Qualifications',
            list: [`Bachelor of Science`, `Melbourne University [1981]`]
        },
        diploma: {
            title: 'Diploma of Education',
            list: [`Hawthorn Institute of Education [1986]`]
        },
        post: `Post Grad Diploma Special Education Melbourne University (2001)`,
    },
    {
        name: 'Marianne David',
        major: 'Teacher - Secondary',
        founded: 'Commenced 2015',
        img: St4,
        texts: [
            `
            Marianne David
            `,
            `Teacher – English & Mathematics [Primary]`,
            `While during her bachelors, Marianne volunteered in an English language school in Melbourne.`,
            `This started her on her education career. She has worked in many positions from kindergarten 
            teacher, integration aid, before and after school coordinator, 
            secondary teacher and early childhood education trainer.`,
            `In her spare time, Marianne enjoys fostering, training and walking dogs, 
            playing computer games and reading.`,
        ],
        position: {
            title: 'Position',
            list: ['Head of Secondary School', 'Secondary Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['English', ' Mathematics']
        },
        training: {
            title: 'Training & Qualifications',
            list: [
                'Certificate of Education (Integration Aid)',
                `Institute ABC [2000]`,
                `B Arts (Drama, Literature and Communication)`,
                `Institute ABC [2000]`,
                `Grad Dip Edu (Secondary – English and Drama)`,
                `Institute ABC [2000]`,
            ]
        },
        diploma: {
            title: 'Master of Teaching (Early Years – 0 to 8 years)',
            list: ['Institute ABC [2000]']
        },
        post: `Post Grad Diploma Special Education Melbourne University (2001)`,
    },
    {
        name: 'Robert Shook',
        major: 'Sports Coach & Drama',
        founded: 'Commenced 2005',
        img: St7,
        texts: [
            `Robert Shook`,
            `Drama Teacher & Action4 Teacher`,
            `After university, Robert moves to Los Angeles for a career in acting, which took a turn into stunts. 
            He worked for 15 years in live stunt shows at theme parks as 
            well as coordinating shows in Japan, Germany, and the U.S.`,
            `Robert moved to Australia in 1998, where he continued to perform in film and television, 
            as well as teaching acting, acrobatics and stunts in professional schools and freelance settings.`,
            `Robert enjoys movies and all the live performances he can see. 
            He writes plays for a creative outlet and also enjoys running and 
            spending as much time with his wife and three children as possible. 
            Robert also has a serious weekly comic book habit.`,
        ],
        position: {
            title: 'Position',
            list: ['Sports Coach', 'Drama Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Drama', ' Action4']
        },
        training: {
            title: 'Training & Qualifications',
            list: [
                'Bachelor of Fine Arts in Acting',
                `Drake University USA [1986]`,
            ]
        },
        diploma: {
            title: 'Master of Teaching (Early Years – 0 to 8 years)',
            list: [`Institute ABC [2000]`]
        },
        post: `Post Grad Diploma Special Education Melbourne University (2001)`,
    },
    {
        name: 'Janelle Stafford',
        major: 'Teacher Aide',
        founded: 'Commenced 2005',
        img: St10,
        texts: [
            `Robert Shook`,
            `Drama Teacher & Action4 Teacher`,
            `After university, Robert moves to Los Angeles for a career in acting, which took a turn into stunts. 
            He worked for 15 years in live stunt shows at theme parks as 
            well as coordinating shows in Japan, Germany, and the U.S.`,
            `Robert moved to Australia in 1998, where he continued to perform in film and television, 
            as well as teaching acting, acrobatics and stunts in professional schools and freelance settings.`,
            `Robert enjoys movies and all the live performances he can see. 
            He writes plays for a creative outlet and also enjoys running and 
            spending as much time with his wife and three children as possible. 
            Robert also has a serious weekly comic book habit.`,
        ],
        position: {
            title: 'Position',
            list: ['Sports Coach', 'Drama Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Drama', ' Action4']
        },
        training: {
            title: 'Training & Qualifications',
            list: [
                'Bachelor of Fine Arts in Acting',
                `Drake University USA [1986]`,
            ]
        },
        diploma: {
            title: 'Master of Teaching (Early Years – 0 to 8 years)',
            list: [`Institute ABC [2000]`]
        },
        post: `Post Grad Diploma Special Education Melbourne University (2001)`,
    },
];
const staffMembersL2 = [
    {
        name: 'Thomas Witenden',
        major: 'Teacher - Primary',
        founded: 'Commenced 2012',
        img: St2,
        texts: [
            `
            Thomas began his career in finance working for MLC in Wollongong and found that it 
            was of no interest to him. He then completed his graduate diploma in education at RMIT 
            and has been working at Kamaruka since graduating.
            `,
            `
            Thomas enjoys traveling, mountain biking, surfing, camping and soccer.
            `,
        ],
        position: {
            title: 'Position',
            list: ['Head of Primary School', 'Primary Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Mathematics', 'Science', 'English', 'Martial Arts', 'Physical Education']
        },
        training: {
            title: 'Training & Qualifications',
            list: ['Bachelor of Commerce (Finance)', 'University of Wollongong [2009]']
        },
        diploma: {
            title: 'Graduate Diploma Education',
            list: [`Royal Melbourne Institute of Technology - RMIT [2013]`]
        },
    },
    {
        name: 'Huw Norris',
        major: 'Teacher - Primary',
        founded: 'Commenced 2012',
        img: St5,
        texts: [
            `Huw has had 10 years experience in Hairdressing, 3 years experience in Retail Management, 
            10 years experience as a Pharmaceutical Sales Rep, and 3 years experience as a Pastor.`,
            `Huw enjoys spending time with his family, music, reading, running and riding his motorbike.`
        ],
        position: {
            title: 'Position',
            list: ['Primary Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Mathematics', 'English', 'Physical Education']
        },
        training: {
            title: 'Training & Qualifications',
            list: ['Post Graduate Diploma of Education (Primary)', 'Eastern College Australia [2000]']
        },
        diploma: {
            title: 'Bachelor of Theology',
            list: ['Tabor College [2000]']
        },
    },
    {
        name: 'Kelly Newton',
        major: 'Teacher - Primary',
        founded: 'Commenced 2016',
        img: St8,
        texts: [
            `Kelly has worked in group and private tutoring for 5 years.`,
            `Kelly enjoys making and viewing art, traveling and good food.`
        ],
        position: {
            title: 'Position',
            list: ['Primary Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Maths', 'English', 'Art']
        },
        training: {
            title: 'Training & Qualifications',
            list: ['Bachelor of Fine Arts / Arts', 'The University of New South Wale [2000]']
        },
        diploma: {
            title: 'Masters of Teaching (Primary & Secondary)',
            list: ['Deakin University [2018]']
        },
    },
];
const staffMembersL3 = [
    {
        name: 'Nicole Stylianou',
        major: 'Teacher - Secondary',
        founded: 'Commenced 2012',
        img: St3,
        texts: [
            `Nicole has experience as year 8 Homeroom and Mathematics teacher at 
            Narre Warren South, as Years 8, 9 and 10 Mathematics Teacher at Preshil, 
            and as Year 11 & 12 Chemistry Laboratory Technician & Year 9 
            Science Laboratory Technician at Methodist Ladies College.`,
            `Nicole enjoys outdoor activities such as camping, hiking, cycling and gentle walks in nature. 
            Loves mindfulness, yoga, reading and being creative. 
            Studied Ayurvedic medicine, massage and Pranic Healing.
            `,
        ],
        position: {
            title: 'Position',
            list: ['Secondary Teacher']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Mathematics', 'Science']
        },
        training: {
            title: 'Training & Qualifications',
            list: ['Bachelor of Education (Primary/ Secondary)', `Deakin University [2000]`]
        },
        diploma: {
            title: 'Bachelor of Applied Science  (Biochemistry/ Chemistry)',
            list: [`Swinburne University [2003]`],
        },
    },
    {
        name: `Emma Tyler`,
        major: `Counsellor & Teacher Aide`,
        founded: `Commenced 2015`,
        img: St6,
        texts: [
            `Emma has worked as an integration aide with boys, aged 5 to 16, who have Autism Spectrum Disorder, 
            Oppositional Defiant Disorder and learning difficulties.`,
            `Emma enjoys reading, drawing and painting in her spare time. 
            She also likes attending live music events, going camping and going to the movies.`
        ],
        position: {
            title: `Position`,
            list: [`Counsellor - Primary School`, `Teacher Aide`]
        },
        specialisation: {
            title: `Specialisation`,
            list: [`Counselling`]
        },
        training: {
            title: `Training & Qualifications`,
            list: [`Bachelor of Social Science (Psychology)`, `RMIT University [2013]`]
        },
        diploma: {
            title: `Youth Mental Health Certificate`,
            list: [`Institute ABC [2000]`],
        },
    },
    {
        name: `Charmaine Bravo`,
        major: 'Teacher Aide',
        founded: 'Commenced 2015',
        img: St9,
        texts: [
            `Charmaine has worked with young people in a number of settings, including NACRO – a crime 
            reduction charity for young offenders and working as a bail support mentor.`,
            `Most recently, Charmaine worked as an instructor in a pupil referral unit where the
             majority of young people had ADHD, teaching English with an emphasis on speaking and listening.`,
            `She has also done a lot of work as a residential youth worker, both in the UK and Australia,
             and is extremely passionate about the work that she does.`,
            `Charmaine enjoys swimming, reading and drawing.`
        ],
        position: {
            title: 'Position',
            list: ['Teacher Aide']
        },
        specialisation: {
            title: 'Specialisation',
            list: ['Drama & Music']
        },
        training: {
            title: 'Training & Qualifications',
            list: ['Bachelor of Drama and Music (Honors)', `Institute ABC [2000]`]
        },
        diploma: {
            title: 'Post Graduate Diploma of Youth Work and Community Development',
            list: [`Institute ABC [2000]`],
        },
    },

];

const staffMembers = [...staffMembersL1, ...staffMembersL2, ...staffMembersL3];

const StaffMembers = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const [isShowAllStaff, setIsShowALlStaff] = useState(false)
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    const showAll = () => {
        setIsShowALlStaff(!isShowAllStaff);
    };

    return <div className={ styles.member_wrap }>

        { size.width <= 768 ? <div className={ styles.member_wrap_text }>
            <p>
                Kamaruka ensures that up to-date teaching methodologies are utilised,
                and modifies programs to meet individual needs.
            </p>
            <p>
                Staff are encouraged to participate in professional development seminars enabling
                them to be informed of the most effective teaching practices, innovative educational
                programs and medical research findings.
            </p>
            <Arrows
                img={ ArrowT }
                text={ !isShowMore ? 'MORE' : 'LESS' }
                compStyle={ { bottom: '10px' } }
                showMore={ handleShowMore }
                style={ !isShowMore ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' } }
            />
        </div> : null }


        { size.width > 768 ?
            <>
                <div className={ styles.member_wrap_item }>
                    { staffMembersL1.map(member => {
                        return <StaffMember
                            key={ member.name }
                            img={ member.img }
                            name={ member.name }
                            major={ member.major }
                            founded={ member.founded }
                            texts={ member.texts }
                            position={ member.position }
                            specialisation={ member.specialisation }
                            training={ member.training }
                            diploma={ member.diploma }
                            post={ member.post }
                        />;
                    }) }
                </div>
                <div className={ styles.member_wrap_item }>
                    { staffMembersL2.map(member => {
                        return <StaffMember
                            key={ member.name }
                            img={ member.img }
                            name={ member.name }
                            major={ member.major }
                            founded={ member.founded }
                            texts={ member.texts }
                            position={ member.position }
                            specialisation={ member.specialisation }
                            training={ member.training }
                            diploma={ member.diploma }
                            post={ member.post }
                        />;
                    }) }
                </div>
                <div className={ styles.member_wrap_item }>
                    { staffMembersL3.map(member => {
                        return <StaffMember
                            key={ member.name }
                            img={ member.img }
                            name={ member.name }
                            major={ member.major }
                            founded={ member.founded }
                            texts={ member.texts }
                            position={ member.position }
                            specialisation={ member.specialisation }
                            training={ member.training }
                            diploma={ member.diploma }
                            post={ member.post }
                        />;
                    }) }
                </div>
            </>
            : <div style={ !isShowMore ? { display: 'none' } : {
                display: 'block',
                paddingBottom: '100px',
                position: 'relative'
            } }>
                <p style={ { marginBottom: '30px' } }>
                    The Principal, Mr. Alfonso Scibilia, has over 25 years of teaching experience. Since 1995,
                    Mr. Scibilia has been involved in the development of teaching strategies and behavioural
                    programs for children with Attention Deficit Hyperactivity Disorder (ADHD), Oppositional
                    Defiant Disorder (ODD) and Conduct Disorder (CD).
                </p>
                { staffMembers.map(member => {
                    return <StaffMember
                        key={ member.name }
                        img={ member.img }
                        name={ member.name }
                        major={ member.major }
                        founded={ member.founded }
                        texts={ member.texts }
                        position={ member.position }
                        specialisation={ member.specialisation }
                        training={ member.training }
                        diploma={ member.diploma }
                        post={ member.post }
                        isShowAllStaff={isShowAllStaff}
                    />;
                }) }
                <Arrows
                    img={ ArrowT }
                    text={ !isShowAllStaff ? 'EXPEND ALL' : 'COLLAPSE ALL' }
                    classnames={'tr'}
                    compStyle={ { bottom: '20px' } }
                    showMore={ showAll }
                    style={ !isShowAllStaff ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' } }
                />
            </div> }

    </div>;
};

export default StaffMembers;




