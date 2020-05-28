import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Loading from './components/Loading';


// provider
import MobileMenuProvider from './context/mobileMenu';
import SubmenuContentProvider from './context/submenuContent';
import DonateProvider from './context/donateOpen';

// pages
import Home from './pages/home';
import Introduction from './pages/about/introduction';
import MissionStatement from './pages/about/missionStatement';
import School from './pages/about/school';
import Staff from './pages/about/staff';
import Committee from './pages/about/committee';
import InterventionProgram from './pages/philosophy/interventionProgram';
import ClassroomStrategies from './pages/philosophy/classroomStrategies';
import PhysicalAchievementContent from './pages/philosophy/physicalAchievement';
import Focus from './pages/curriculum/focus';
import Assessment from './pages/curriculum/assessment';
import VocationalEducation from './pages/curriculum/vocationalEducation';
import Program from './pages/curriculum/program';
import TermDates from './pages/curriculum/termDates';
import Foreword from './pages/approach/foreword';
import BehaviourModification from './pages/approach/behaviourModification';
import Medication from './pages/approach/medication';
import Intake from './pages/enrolment/intake';
import FeesBursaries from './pages/enrolment/feesBursaries';
import Process from './pages/enrolment/process';
import Details from './pages/contact/details';
import EnquiryForm from './pages/contact/enquiryForm';
import Location from './pages/contact/location';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsCondidtions from './pages/termsCondidtions';
import ChildSafetyPolicy from './pages/childSafetyPolicy';
import Fees from './pages/payments/fees';
import Donations from './pages/payments/donations';
import Policy from './pages/approach/policy';


function App() {
    const [isShowLoading, setIsShowLoading] = useState(true);

    setTimeout(() => {
        setIsShowLoading(false);
    }, 2500)

    return (
        <Router>
            <SubmenuContentProvider>
                <MobileMenuProvider>
                    <DonateProvider>
                        <div className="App">
                            <Header />
                            <Navigation />
                            <Switch>

                                <Route path="/about/mission-statement" component={ MissionStatement } />
                                <Route path="/about/introduction" component={ Introduction } />
                                <Route path="/about/school-performance" component={ School } />
                                <Route path="/about/staff" component={ Staff } />
                                <Route path="/about/committee" component={ Committee } />
                                <Route path="/about">
                                    <Redirect to="/about/introduction" />
                                </Route>
                                <Route path="/philosophy/intervention-program" component={ InterventionProgram } />
                                <Route path="/philosophy/classroom-strategies" component={ ClassroomStrategies } />
                                <Route path="/philosophy/physical-achievement"
                                       component={ PhysicalAchievementContent } />
                                <Route path="/philosophy">
                                    <Redirect to="/philosophy/intervention-program" />
                                </Route>
                                <Route path="/curriculum/focus" component={ Focus } />
                                <Route path="/curriculum/assessment" component={ Assessment } />
                                <Route path="/curriculum/vocational-education" component={ VocationalEducation } />
                                <Route path="/curriculum/program" component={ Program } />
                                <Route path="/curriculum/term-dates" component={ TermDates } />
                                <Route path="/curriculum">
                                    <Redirect to="/curriculum/focus" />
                                </Route>

                                <Route path="/approach/policy" component={ Policy } />
                                <Route path="/approach/foreword" component={ Foreword } />
                                <Route path="/approach/behaviour-modification" component={ BehaviourModification } />
                                <Route path="/approach/medication" component={ Medication } />
                                <Route path="/approach">
                                    <Redirect to="/approach/foreword" />
                                </Route>

                                <Route path="/enrolment/intake" component={ Intake } />
                                <Route path="/enrolment/process" component={ Process } />
                                <Route path="/enrolment/fees-bursaries" component={ FeesBursaries } />
                                <Route path="/enrolment">
                                    <Redirect to="/enrolment/intake" />
                                </Route>

                                <Route path="/contact/details" component={ Details } />
                                <Route path="/contact/enquiry" component={ EnquiryForm } />
                                <Route path="/contact/location" component={ Location } />
                                <Route path="/contact">
                                    <Redirect to="/contact/details" />
                                </Route>

                                <Route path="/privacy-policy" component={ PrivacyPolicy } />
                                <Route path="/terms-condidtions" component={ TermsCondidtions } />
                                <Route path="/child-safety-policy" component={ ChildSafetyPolicy } />

                                <Route path={ ['/payments/donations/:id', '/payments/donations'] }
                                       component={ Donations } />
                                <Route path={ ['/payments/fees/:id', '/payments/fees'] } component={ Fees } />
                                <Route path="/payments">
                                    <Redirect to="/payments/fees" />
                                </Route>

                                <Route exact path="/home" component={ Home } />

                                <Route path="/">
                                    <Redirect to="/home" />
                                </Route>
                            </Switch>
                            <Footer />
                            {isShowLoading && <Loading/>}
                        </div>
                    </DonateProvider>
                </MobileMenuProvider>
            </SubmenuContentProvider>
        </Router>
    );
}

export default App;
